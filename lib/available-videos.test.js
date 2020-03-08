import { AvailableVideos } from "./available-videos";
import { YouTubeVideo } from "./video";

import { when } from "jest-when";

jest.mock("./video");

describe("AvailableVideos.findFromDocument()", () => {
  it("retrieve videos from given document", () => {
    const document = {
      querySelectorAll: jest.fn()
    };

    const iframe = mockIframeElementOfSrc("https://www.youtube.com/");
    when(document.querySelectorAll)
      .calledWith(".iframe-video-player > iframe")
      .mockReturnValue([iframe]);

    when(YouTubeVideo.tryAccept)
      .calledWith(iframe)
      .mockReturnValue({});

    expect(AvailableVideos.findFromDocument(document).videos.length).toBe(1);
  });
});

function mockIframeElementOfSrc(src) {
  return {
    src
  };
}

describe("AvailableVideos.topOrNull()", () => {
  it("returns the top video", () => {
    const higher = mockVideoWithTopYPosOf(100);
    const lower = mockVideoWithTopYPosOf(200);
    const availableVideos = new AvailableVideos([lower, higher]);

    expect(availableVideos.topOrNull()).toBe(higher);
  });

  it("returns null out of empty set", () => {
    expect(new AvailableVideos([]).topOrNull()).toBe(null);
  });
});

describe("AvailableVideos.nearestAboveElementOrNull()", () => {
  it("returns video nearest and above given element", () => {
    const higher = mockVideoWithTopYPosOf(100);
    const lower = mockVideoWithTopYPosOf(200);
    const availableVideos = new AvailableVideos([lower, higher]);

    const higherElem = mockElemWithTopYPosOf(150);

    expect(availableVideos.nearestAboveElementOrNull(higherElem)).toBe(higher);

    const lowerElem = mockElemWithTopYPosOf(250);
    expect(availableVideos.nearestAboveElementOrNull(lowerElem)).toBe(lower);
  });

  it("returns null out of empty set", () => {
    expect(new AvailableVideos([]).topOrNull()).toBe(null);
  });
});

function mockVideoWithTopYPosOf(y) {
  return {
    iframe: {
      getBoundingClientRect() {
        return {
          top: y
        };
      }
    }
  };
}

function mockElemWithTopYPosOf(y) {
  return {
    getBoundingClientRect() {
      return {
        top: y
      };
    }
  };
}
