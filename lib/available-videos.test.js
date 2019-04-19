import { AvailableVideos } from "./available-videos";

describe("AvailableVideos.topOrNull()", () => {
  it("returns the top video", () => {
    const higher = mockVideoHaveTopYPosOf(100);
    const lower = mockVideoHaveTopYPosOf(200);
    const availableVideos = new AvailableVideos([lower, higher]);

    expect(availableVideos.topOrNull()).toBe(higher);
  });

  it("returns null out of empty set", () => {
    expect(new AvailableVideos([]).topOrNull()).toBe(null);
  });
});

function mockVideoHaveTopYPosOf(y) {
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
