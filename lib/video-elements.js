export function findInlineVideoElement(document) {
  const iframe = document.querySelector(".iframe-video-player > iframe");

  if (!iframe) {
    return iframe;
  }

  const src = iframe.src;
  if (src.startsWith("https://www.youtube.com/") && !/enablejsapi/.test(src)) {
    iframe.src = src + "&enablejsapi=1";
  }

  return iframe;
}

export function sendYouTubeSeekCommand(iframe, seconds) {
  const payload = { event: "command", func: "seekTo", args: [seconds, true] };
  iframe.contentWindow.postMessage(
    JSON.stringify(payload),
    "https://www.youtube.com"
  );
}
