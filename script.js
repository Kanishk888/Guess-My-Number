'use strict';
/* */
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const reset = document.querySelector('.reset');
let highScore = document.querySelector('.highscore');
let score = document.querySelector('.score');
const randomNum = Math.floor(1 + Math.random() * 20);
const number = document.querySelector('.number');
/* */
const again = () => {
  guess.disabled = '';
  guess.value = null;
  message.textContent = 'Start guessing...';
  score.textContent = '20';
  number.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
};
const numGuess = () => {
  if (randomNum > Number(guess.value)) {
    message.textContent = 'Too Low!';
    score.textContent = Number(score.textContent) - 1;
  } else if (randomNum < Number(guess.value)) {
    message.textContent = 'Too High!';
    score.textContent = Number(score.textContent) - 1;
  } else {
    message.textContent = 'Winner';
    guess.disabled = 'true';
    highScore.textContent = score.textContent;
    document.querySelector('body').style.backgroundColor = 'Green';
    number.textContent = randomNum;
  }
};
