import { parseTimePoint } from "./time-point";

describe("parseTimePoint()", () => {
  it("parses seconds", () => {
    expect(parseTimePoint("22")).toBe(22);
  });

  it("parses mm:ss form", () => {
    expect(parseTimePoint("10:31")).toBe(631);
  });

  it("parses hh:mm:ss form", () => {
    expect(parseTimePoint("1:02:03")).toBe(3723);
  });
});
