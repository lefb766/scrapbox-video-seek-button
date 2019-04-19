import { AvailableVideos } from "./lib/available-videos";
import { parseTimePoint } from "./lib/time-point";

setInterval(() => {
  AvailableVideos.findFromDocument(document).videos.forEach(v => {
    v.ensureControllable();
  });
}, 2000);

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

    const video = AvailableVideos.findFromDocument(document).firstOrNull();

    if (!video) {
      return;
    }

    video.seek(seconds);
  }
});
