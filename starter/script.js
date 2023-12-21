'use strict';
const secretNumber = Math.floor(Math.random() * 20);
let score = 20;
let highscore = 0;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  //when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number🏒';
  } else if (guess == secretNumber) {
    //when equal
    document.querySelector('.message').textContent = '🎉Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    //when guess is to high
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too hight🎈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 😣';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    //when guess
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low🎗';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 😣';
      document.querySelector('.score').textContent = 0;
    }
  }
});

console.log(secretNumber);
