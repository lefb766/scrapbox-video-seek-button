import { TimePoint } from "./time-point";

describe("TimePoint.parse()", () => {
  it("parses seconds", () => {
    expect(TimePoint.parse("22").seconds).toBe(22);
  });

  it("parses mm:ss form", () => {
    expect(TimePoint.parse("10:31").seconds).toBe(631);
  });

  it("parses hh:mm:ss form", () => {
    expect(TimePoint.parse("1:02:03").seconds).toBe(3723);
  });
});
