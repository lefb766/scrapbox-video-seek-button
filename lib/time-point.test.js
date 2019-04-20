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

  it("picks time from fuzzy text", () => {
    expect(TimePoint.parse("[> 1:29]").seconds).toBe(89);
  });

  it("returns null if no digits are found", () => {
    expect(TimePoint.parse("[Hello scrapbox]")).toBe(null);
  });
});

describe("TimePoint.toFriendlyFormat()", () => {
  it("formats seconds into forms like hh:mm:ss", () => {
    expect(new TimePoint(50).toFriendlyFormat()).toBe("50");
    expect(new TimePoint(2400).toFriendlyFormat()).toBe("40:00");
    expect(new TimePoint(3723).toFriendlyFormat()).toBe("1:02:03");
  });
});
