'use strict';

const beginScore = 20;
const numberRange = [1, 20];
const checkButton = document.querySelector('.check');
let score = beginScore;
document.querySelector('.score').textContent = score;
let secretNumber = getRandomNumber(numberRange[0], numberRange[1]);
let heighScore = 0;

document.querySelector('.again').addEventListener('click', clearTheGame);

checkButton.addEventListener('click', () => {
	const guess = Number(document.querySelector('.guess').value);
	//console.log('secretNumber: ', secretNumber);
	console.log('-------------------')
	console.log('guess: ', guess);
	console.log('Begin score:', score);
	if (score <= 0) {
		displayGameMessage("You`ve lost! Try again!");
	} else if (!guess && guess !== 0) {
		decreaseScore();
		checkScore(score, "No number!");
	} else if (guess === secretNumber) {
		heighScore = heighScore > score ? heighScore : score;
		displayGameMessage("Win!");
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('body').style.backgroundColor = '#60b347';
	} else if (guess > 20 || guess < 1) {
		decreaseScore();
		checkScore(score, "Number out of range!");
	} else if (guess > secretNumber) {
		decreaseScore();
		checkScore(score, "Too high!");
	} else if (guess < secretNumber) {
		decreaseScore();
		checkScore(score, "Too low!");
	} 
	console.log('End score:', score);
});

document.querySelector('.guess').addEventListener('click', () => {
	document.querySelector('.guess').value = '';
})


function decreaseScore() {
	--score;
	document.querySelector('.score').textContent = score;
	
}

function clearTheGame() {
	console.log('again');
	score = beginScore;
	document.querySelector('.highscore').textContent = heighScore;
	displayGameMessage('Start guessing...');
	document.querySelector('.guess').value = '';
	secretNumber = getRandomNumber(numberRange[0], numberRange[1])
	document.querySelector('.number').textContent = '?';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.score').textContent = beginScore;
	document.querySelector('body').style.backgroundColor = '#222';
}

function checkScore(score, message) {
	console.log('Cheking score: ', score);
	if (score === 0) {
		looseTheGame();
	} else {
		displayGameMessage(message);
	}
}

function looseTheGame() {
	displayGameMessage("The game is lost! Try again");
}

function getRandomNumber(minBorder, maxBorder) {
	return Math.trunc(Math.random() * (maxBorder - (minBorder - 1)) + minBorder);
}

function displayGameMessage(message) {
	document.querySelector('.message').textContent = message;
}