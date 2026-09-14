let startTime;
let elapsedTime = 0;
let timerInterval;

// Get the elements
const timeDisplay = document.querySelector(".time-display");
const startBtn = document.getElementById("startBtn");

// Start button
startBtn.addEventListener("click", function () {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;

    displayTime(elapsedTime);
  }, 10);
});

function displayTime(time) {
  let milliseconds = Math.floor(time % 1000);
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let hours = Math.floor(time / (1000 * 60 * 60));

  milliseconds = milliseconds.toString().padStart(3, "0");
  seconds = seconds.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  hours = hours.toString().padStart(2, "0");

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
//pause
const pauseBtn = document.getElementById("pauseBtn");

pauseBtn.addEventListener("click", function () {
  clearInterval(timerInterval);
});

//reset
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
  clearInterval(timerInterval);

  elapsedTime = 0;

  displayTime(elapsedTime);
});

//lap
const lapBtn = document.getElementById("lapBtn");
const lapList = document.getElementById("lapList");

let lapCount = 0;
lapBtn.addEventListener("click", function () {
  lapCount++;

  const lapItem = document.createElement("li");

  lapItem.textContent = `Lap ${lapCount} - ${timeDisplay.textContent}`;

  lapList.appendChild(lapItem);
});
