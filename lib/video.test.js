import { YouTubeVideo } from "./video";

describe("YouTubeVideo.ensureControllable()", () => {
  it("appends enablejsapi=1 to src if not present", () => {
    const mockIFrameElement = {
      src: "https://youtube.com/xxx?autoplay=1"
    };

    const video = new YouTubeVideo(mockIFrameElement);

    video.ensureControllable();

    expect(mockIFrameElement.src).toBe(
      "https://youtube.com/xxx?autoplay=1&enablejsapi=1"
    );
  });

  it("does nothing if enablrejsapi=1 is present", () => {
    const mockIFrameElement = {
      src: "https://youtube.com/xxx?autoplay=1&enablejsapi=1"
    };

    const video = new YouTubeVideo(mockIFrameElement);

    video.ensureControllable();

    expect(mockIFrameElement.src).toBe(
      "https://youtube.com/xxx?autoplay=1&enablejsapi=1"
    );
  });
});

describe("YouTubeVideo.seek()", () => {
  it("sends seekTo command to the contentWindow", () => {
    const mockIFrameElement = {
      contentWindow: {
        postMessage: jest.fn()
      }
    };

    const video = new YouTubeVideo(mockIFrameElement);

    video.seek(200);

    expect(mockIFrameElement.contentWindow.postMessage).toHaveBeenCalledWith(
      '{"event":"command","func":"seekTo","args":[200,true]}',
      "https://www.youtube.com"
    );
  });
});
