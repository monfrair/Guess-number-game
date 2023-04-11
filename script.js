'use strict';
// document.querySelector('.message').textContent = 'Correct Number! 🤯';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(secretNumber);
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // when user enters no input or non eligible numbers
  if (!guess || guess > 20 || guess < 1) {
    displayMessage('Please enter a number between 1-20!  🤯🤯🤯🤯');

    // when player wins game
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🤯');

    // change look of screen when game is won
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('h1').textContent =
      'WINNER WINNER CHICKEN DINNER...';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // refactored too high and too low scenarios from below
    // will now be when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Your guess is too high!   😬'
          : 'Your guess is too low!    😬'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 🤬🤬🤬🤬🤬!');

      document.querySelector('h1').textContent =
        'You lost. The winning number was...';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }

    // user guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       'Your guess is too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent =
    //       'You lost the game 🤬🤬🤬🤬🤬!';
    //     document.querySelector('h1').textContent =
    //       'You lost. The winning number was...';
    //     document.querySelector('.number').textContent = secretNumber;
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('body').style.backgroundColor = 'red';
    //   }

    // user guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Your guess is too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent =
    //       'You lost the game 🤬🤬🤬🤬🤬!';
    //     document.querySelector('h1').textContent =
    //       'You lost. The winning number was...';
    //     document.querySelector('.number').textContent = secretNumber;
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('body').style.backgroundColor = 'red';
    //   }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('h1').textContent = 'Guess the secret number!';
  console.log(secretNumber);
});
