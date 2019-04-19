export class TimePoint {
  constructor(seconds) {
    this.seconds = seconds;
  }

  static parse(str) {
    const parts = str.split(":");
    if (parts.length > 3 || parts.some(p => !/[1-9]?[0-9]/.test(p))) {
      return null;
    }
    const seconds = parts.map(p => parseInt(p)).reduce((a, c) => a * 60 + c, 0);

    return new TimePoint(seconds);
  }
}
