import { YouTubeVideo } from "./video";

const VIDEO_IFRAME_SELECTOR = ".iframe-video-player > iframe";

export class AvailableVideos {
  constructor(videos) {
    this.videos = videos;
  }

  static findFromDocument(document) {
    const iframes = document.querySelectorAll(VIDEO_IFRAME_SELECTOR);

    const videos = Array.from(iframes)
      .map(iframe => YouTubeVideo.tryAccept(iframe))
      .filter(v => !!v);

    return new AvailableVideos(videos);
  }

  topOrNull() {
    // sort videos by position desc
    this.videos.sort((a, b) => {
      return getTopPos(a) - getTopPos(b);
    });

    if (this.videos.length === 0) {
      return null;
    }

    return this.videos[0];
  }

  nearestAboveElementOrNull(elem) {
    // sort videos by position asc
    this.videos.sort((a, b) => {
      return getTopPos(b) - getTopPos(a);
    });

    const elemTop = elem.getBoundingClientRect().top;

    for (const video of this.videos) {
      const videoTop = getTopPos(video);
      if (videoTop < elemTop) return video;
    }

    return null;
  }
}

function getTopPos(video) {
  return video.iframe.getBoundingClientRect().top;
}
