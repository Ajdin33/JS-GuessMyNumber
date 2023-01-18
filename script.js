'use strict';

// assigment
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;
let playing = true;

// functions
const displayingMessage = m => {
  document.querySelector('.message').textContent = m;
};

checkBtn.addEventListener('click', () => {
  // we only want playing to be false when we win the game or when the score is < 1
  if (playing) {
    const guess = Number(document.querySelector('.guess').value);

    // when there is no number in check input
    if (!guess) {
      displayingMessage('There is no number in input field!');

      //   when you win
    } else if (guess === secretNumber) {
      displayingMessage('You guessed number - You win!');
      playing = false;

      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';

      //   display highscore when its greater than current score
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      //   when number is smaller or greater than secret number
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayingMessage(
          guess > secretNumber ? 'Big number' : 'Small number!'
        );

        score--;
        document.querySelector('.score').textContent = score;
      } else {
        playing = false;
        displayingMessage('YOU LOST!');
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = 'red';
      }
    }
  } else {
    displayingMessage('Your game is finished!');
    document.querySelector('.message').style.color = '#darkred';
  }
});

// AGAIN
againBtn.addEventListener('click', () => {
  displayingMessage('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 21);
  playing = true;
  score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
});
