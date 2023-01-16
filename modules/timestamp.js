const currentTimeDiv = document.getElementById('current-time');

// Timestamp content
function timeTrackUpdate() {
  const currentTimeBlock = document.createElement('p');
  const currentTime = new Date();
  currentTimeBlock.textContent = currentTime;
  currentTimeDiv.replaceChildren(currentTimeBlock.textContent.replace(/\(.*\)/g, ''));
}

timeTrackUpdate();
setInterval(timeTrackUpdate, 1000);