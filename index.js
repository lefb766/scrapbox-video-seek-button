import {
  findInlineVideoElement,
  sendYouTubeSeekCommand
} from "./lib/video-elements";

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

    const element = findInlineVideoElement(document);

    sendYouTubeSeekCommand(element, seconds);
  }
});

function parseTimePoint(str) {
  let parts = str.split(":");
  if (parts.length > 3 || parts.some(p => !/[1-9]?[0-9]/.test(p))) {
    return null;
  }
  return parts.map(p => parseInt(p)).reduce((a, c) => a * 60 + c, 0);
}
