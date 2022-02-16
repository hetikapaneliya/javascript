"use strict";
let scores = 20;
const highscor = 0;
const snumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = snumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === snumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#7fbdcf";

    if (scores > highscor) {
      scores = highscor;
      document.querySelector("highscore").textContent = highscor;
    }
  } else if (guess > snumber) {
    if (scores > 1) {
      document.querySelector(".message").textContent = " Number is to high";

      scores--;
      debugger;
      document.querySelector(".scores").textContent = scores;
    } else {
      document.querySelector(".message").textContent = " you lost the game";
      document.querySelector(".scores").textContent = 0;
    }
  } else if (guess < snumber) {
    if (scores > 1) {
      document.querySelector(".message").textContent = " Number is to low";
      scores--;
      document.querySelector(".scores").textContent = scores;
    } else {
      document.querySelector(".message").textContent = " you lost the game";
      document.querySelector(".scores").textContent = 0;
    }
  }
});
