import { TimePoint } from "./time-point";

describe("TimePoint.parse()", () => {
  it("parses seconds", () => {
    expect(TimePoint.parse("22").seconds).toBe(22);
    expect(TimePoint.parse("1234").seconds).toBe(1234);
  });

  it("parses mm:ss form", () => {
    expect(TimePoint.parse("10:31").seconds).toBe(631);
  });

  it("parses hh:mm:ss form", () => {
    expect(TimePoint.parse("1:02:03").seconds).toBe(3723);
  });

  it("returns null on failure", () => {
    expect(TimePoint.parse("1: 2:03")).toBe(null);
  });
});

describe("TimePoint.toFriendlyFormat()", () => {
  it("formats seconds into forms like hh:mm:ss", () => {
    expect(new TimePoint(3723).toFriendlyFormat()).toBe("1:02:03");
  });
});
