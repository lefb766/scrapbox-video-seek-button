export class TimePoint {
  constructor(seconds) {
    this.seconds = seconds;
  }

  static parse(str) {
    const timePointLike = str.match(/[1-9][0-9]*(:[0-9]+)*/);
    if (!timePointLike) {
      return null;
    }

    const parts = timePointLike[0].split(":");
    if (parts.length > 3) {
      return null;
    }
    const seconds = parts.map(p => parseInt(p)).reduce((a, c) => a * 60 + c, 0);

    return new TimePoint(seconds);
  }

  toFriendlyFormat() {
    let parts = [];

    const s = this.seconds % 60;

    const minutes = Math.round(this.seconds / 60 - 0.5);
    if (!minutes) {
      return "" + s;
    } else {
      parts.push(pad02(s));
    }

    const hours = Math.round(minutes / 60 - 0.5);

    parts.push(hours ? pad02(minutes % 60) : minutes % 60);

    if (hours) {
      parts.push("" + hours);
    }

    return parts.reverse().join(":");
  }
}

function pad02(n) {
  const str = "0" + n;
  return str.slice(str.length - 2, str.length);
}
