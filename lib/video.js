export class YouTubeVideo {
  constructor(iframe) {
    this.iframe = iframe;
  }

  static tryAccept(iframe) {
    const src = iframe.src;

    if (!src || !src.startsWith("https://www.youtube.com/")) {
      return null;
    }

    return new YouTubeVideo(iframe);
  }

  seek(seconds) {
    sendYouTubeSeekCommand(this.iframe, seconds);
  }

  ensureControllable() {
    const src = this.iframe.src;
    if (!/enablejsapi/.test(src)) {
      this.iframe.src = src + "&enablejsapi=1";
    }
  }
}

function sendYouTubeSeekCommand(iframe, seconds) {
  const payload = { event: "command", func: "seekTo", args: [seconds, true] };
  iframe.contentWindow.postMessage(
    JSON.stringify(payload),
    "https://www.youtube.com"
  );
}
