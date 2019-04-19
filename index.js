import { findVideo } from "./lib/video-finder";
import { parseTimePoint } from "./lib/time-point";

scrapbox.PopupMenu.addButton({
  title: time => {
    const seconds = parseTimePoint(time);
    if (seconds === null) {
      return null;
    }

    return `Jump to ${time}`;
  },

  onClick: time => {
    const seconds = parseTimePoint(time);
    if (seconds === null) {
      return null;
    }

    const video = findVideo(document);

    video.seek(seconds);
  }
});
