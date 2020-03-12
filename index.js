import { AvailableVideos } from "./lib/available-videos";
import { TimePoint } from "./lib/time-point";

setInterval(() => {
  AvailableVideos.findFromDocument(document).videos.forEach(v => {
    v.ensureControllable();
  });
}, 2000);

function seek(time, selectedElement) {
  const timePoint = TimePoint.parse(time);
  if (timePoint === null) {
    return null;
  }

  const video = AvailableVideos.findFromDocument(
    document
  ).nearestAboveElementOrNull(selectedElement);

  if (!video) {
    return;
  }

  video.seek(timePoint.seconds);
}

document.body.addEventListener("click", ev => {
  for (let target = ev.target; target; target = target.parentElement) {
    if (target.classList && target.classList.contains("deco->")) {
      const time = target.textContent;
      seek(time, target);
    }
  }
});

scrapbox.PopupMenu.addButton({
  title(time) {
    const timePoint = TimePoint.parse(time);
    if (timePoint === null) {
      return null;
    }

    return `Jump to ${timePoint.toFriendlyFormat()}`;
  },
  onClick(time) {
    const popupMenu = document.querySelector("div.popup-menu");
    seek(time, popupMenu);
  }
});
