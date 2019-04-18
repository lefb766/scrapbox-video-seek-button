import { YouTubeVideo } from "./video";

const VIDEO_IFRAME_SELECTOR = ".iframe-video-player > iframe";

export function findVideo(document) {
  const iframe = document.querySelector(VIDEO_IFRAME_SELECTOR);

  if (!iframe) {
    return null;
  }

  return YouTubeVideo.tryAccept(iframe);
}

export function findAllVideos(document) {
  const iframes = document.querySelectorAll(VIDEO_IFRAME_SELECTOR);

  return iframes.map(iframe => YouTubeVideo.tryAccept(iframe)).filter(v => !!v);
}
