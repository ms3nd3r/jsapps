'use strict';

var gameMinutesTxt = prompt("Enter the game time (minutes):");
if (isNaN(gameMinutesTxt) || gameMinutesTxt === '' || gameMinutesTxt == null) {
    alert('Please enter a valid number! This page will be reloaded when the close button is pressed');
    location.reload();
}

var gameMinutes = parseInt(gameMinutesTxt);

// Convert game time to milliseconds
var gameMilliSec = gameMinutes * 60 * 1000;

// Calculate time array [hours, min, sec, milli]
function timeCalc(gameMilliSec) {
    const milli = Math.floor(gameMilliSec / 10) % 100;
    const sec = Math.floor(gameMilliSec / 1000) % 60;
    const min = Math.floor(gameMilliSec / 1000 / 60) % 60;
    const hours = Math.floor(gameMilliSec / 1000 / 60 / 60) % 24;
    return [hours, min, sec, milli];
}

var timeArray = timeCalc(gameMilliSec);

// Add leading zeros to time values
function zeroCheck(timeArray) {
    return timeArray.map(function (value) {
        return value < 10 ? '0' + value : value;
    });
}

timeArray = zeroCheck(timeArray);

const nowGameTime = timeArray.join(':');
document.getElementById('timer').textContent = nowGameTime;

// Update game time
function countdown(gameMilliSec) {
    gameMilliSec -= 1; // Subtract 1 millisecond from the game time
    return gameMilliSec;
}

// Check if game over and display appropriate message
function gameOverCheck(gameMilliSec) {
    if (gameMilliSec < 150) {
        gameMilliSec = 0;
        timeArray = timeCalc(gameMilliSec);
        timeArray = zeroCheck(timeArray);
        var nowGameTimeZero = timeArray.join(':');
        document.getElementById('timer').textContent = nowGameTimeZero;
        document.getElementById('gameOver').textContent = "Game Over";
        return true; // Return true to indicate game over
    }
    return false; // Return false if game is not over
}

// Recalculate game time and update timer display
function recalc() {
    if (gameOverCheck(gameMilliSec)) {
        return; // Stop the timer if game is over
    }

    gameMilliSec = countdown(gameMilliSec);
    timeArray = timeCalc(gameMilliSec);
    timeArray = zeroCheck(timeArray);
    var nowGameTime = timeArray.join(':');
    document.getElementById('timer').textContent = nowGameTime;

    setTimeout(recalc, 1); // Update timer every 1 millisecond
}

recalc();