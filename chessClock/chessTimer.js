let timeLeft = 300; // time in seconds
let intervalId;

const timerDisplay = document.getElementById("timerDisplay");
const resetButton = document.getElementById("resetButton");

function startTimer() {
  timeLeft = document.getElementById("timeInput").value * 60;
  intervalId = setInterval(() => {
    timeLeft--;
    timerDisplay.innerHTML = `Time Left: ${Math.floor(timeLeft / 60)}:${("0" + timeLeft % 60).slice(-2)}`;
    if (timeLeft <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
  resetButton.disabled = false;
}

function resetTimer() {
  clearInterval(intervalId);
  timeLeft = 300;
  timerDisplay.innerHTML = "Time Left: 5:00";
  resetButton.disabled = true;
}
