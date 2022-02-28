// Define the day of the week 
let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
}

// Define month 
let month;
switch (new Date().getMonth()) {
case 0:
    month = "January";
    break;
case 1:
    month = "February";
    break;
case 2:
    month = "March";
    break;
case 3:
    month = "April";
    break;
case 4:        
    month = "May";
    break;
case 5:
    month = "June";
    break;
case 6:
    month = "July";
    break;
case 7:
    month = "August";
    break;
case 8:
    month = "September";
    break;
case 9:
    month = "October";
    break;
case 10:
    month = "November";
    break;
case 11:
    month = "December";
}

// Define day of the month
let dayNumber = new Date().getDate();

// Define current year
let year = new Date().getFullYear();

// This line of code will display the current date
document.querySelector('.calendar').innerHTML = day + ", " + month + " " + dayNumber + ", " + year;


// Define minutes variable
let minutes = new Date().getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes
};


// Define the hours in a clock
let hour;
switch (new Date().getHours()) {
    case 1:
    case 13:
        hour = "1";
    break;
    case 2:
    case 14:
        hour = "2";
    break;
    case 3:
    case 15:
        hour = "3";
    break;
    case 4:
    case 16:
        hour = "4";
    break;
    case 5:
    case 17:
        hour = "5";
    break;
    case 6:
    case 18:
        hour = "6";
    break;
    case 7:
    case 19:
        hour = "7";
    break;
    case 8:
    case 20:
        hour = "8";
    break;
    case 9:
    case 21:
        hour = "9";
    break;
    case 10:
    case 22:
        hour = "10";
    break;
    case 11:
    case 23:
        hour = "11";
    break;
    case 12:
    case 0:  
        hour = "12";
    break;
}


// Display current hours and minutes
document.querySelector('.time').innerHTML = hour + ":" + minutes;



// Just a random comment

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();


function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
 
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
 
  guessCount++;
  guessField.value = '';
  guessField.focus();
}


guessField.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    guessSubmit.click();
  }
});
guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}


function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}