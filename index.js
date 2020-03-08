import { AvailableVideos } from "./lib/available-videos";
import { TimePoint } from "./lib/time-point";

setInterval(() => {
  AvailableVideos.findFromDocument(document).videos.forEach(v => {
    v.ensureControllable();
  });
}, 2000);

scrapbox.PopupMenu.addButton({
  title: time => {
    const timePoint = TimePoint.parse(time);
    if (timePoint === null) {
      return null;
    }

    return `Jump to ${timePoint.toFriendlyFormat()}`;
  },

  onClick: time => {
    const timePoint = TimePoint.parse(time);
    if (timePoint === null) {
      return null;
    }

    const popupMenu = document.querySelector("div.popup-menu");

    const video = AvailableVideos.findFromDocument(
      document
    ).nearestAboveElementOrNull(popupMenu);

    if (!video) {
      return;
    }

    video.seek(timePoint.seconds);
  }
});
