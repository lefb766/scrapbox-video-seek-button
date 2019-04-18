import { findVideo } from "./lib/video-finder";

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

function parseTimePoint(str) {
  let parts = str.split(":");
  if (parts.length > 3 || parts.some(p => !/[1-9]?[0-9]/.test(p))) {
    return null;
  }
  return parts.map(p => parseInt(p)).reduce((a, c) => a * 60 + c, 0);
}
