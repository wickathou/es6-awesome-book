import { DateTime } from "./luxon.js";

const currentTimeDiv = document.getElementById('current-time');

// Timestamp content
function timeTrackUpdate() {
  const currentTimeBlock = document.createElement('p');
  const currentTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL)
  currentTimeBlock.textContent = currentTime;
  currentTimeDiv.replaceChildren(currentTimeBlock.textContent);
}

timeTrackUpdate();
setInterval(timeTrackUpdate, 60000);