/* 
	Finish up new game functionality 
	- clear all divs
	- clear hangman drawing
	- all new game from the winner
*/


const c = document.getElementById('myCanvas');
const ctx = c.getContext("2d");
let answer = "house";
const submit = document.querySelector('.submit-btn');
const page = document.querySelector('body');
const newGame = document.querySelector('.new-game-btn');
let key = [
	{
		question: "What is the building people live inside of ?",
		answer: "house",

	},
	{
		question: "Where do kids go to learn?",
		answer: "school"
	},
	{
		question: "In what sport do you only kick a ball?",
		answer: "soccer"
	},
]




newGame.addEventListener('click', function () {
	newQuestion();
	const previousGuess = document.querySelector('.previous-guess');
	previousGuess.innerHTML = "";
	//clears hangman
	ctx.clearRect(0, 0, c.width, c.height);
	createBase();

const correctGuesses = document.querySelectorAll('.correct-guesses');
correctGuesses.childNodes.item(0).innerHTML ="";
	console.log("what is in correct-guesses", correctGuesses);


});



function newQuestion() {
	let randomNumber = Math.floor(Math.random() * key.length);
	console.log(randomNumber);
	document.querySelector('.new-question').innerHTML = key[randomNumber].question;
	answer = key[randomNumber].answer;
	console.log("answer------", key[randomNumber].answer);
};

newQuestion();


function onlyLetterCheck() {
	const arrayOfGuesses = [];
	const letters = /^[A-Za-z]+$/;
	const inputField = document.querySelector('.form-control');

	if (arrayOfGuesses.includes(inputField.value)) {
		return false;
	};

	arrayOfGuesses.push(inputField.value);


	if (inputField.value.match(letters)) {
		return true;
	} else {
		$('#exampleModalCenter').modal('show')
		return false;
	}
};

function guessSquares() {
	const guessContainer = document.querySelector('.guess-container');

	answer.split("").forEach(function () {
		const newSquare = document.createElement('div');
		newSquare.className = "correct-guesses";
		guessContainer.insertAdjacentElement('afterbegin', newSquare);
	});
};
guessSquares();

function createBase() {
	ctx.beginPath();
	ctx.moveTo(100, 600);
	ctx.lineTo(100, 100);
	ctx.lineTo(300, 100);
	ctx.lineTo(300, 175);
	ctx.lineWidth = 10;
	ctx.strokeStyle = "black";
	ctx.stroke();

}
createBase();

function comparing(correctGuesses, guess) {
	const comparisonResults = [];

	for (i = 0; i < answer.length; i++) {
		if (guess.value === answer[i]) {
			correctGuesses[i].innerText = guess.value;
			comparisonResults.push("correct");
		} else {
			comparisonResults.push("incorrect");
		}
	};

	return comparisonResults
};

function winnerComparison(correctGuesses) {
	const arrayOfCorrectGuesses = [];
	console.log("guessed correct---", arrayOfCorrectGuesses);

	for (i = 0; i < correctGuesses.length; i++) {
		const items = correctGuesses[i].textContent;
		arrayOfCorrectGuesses.push(items);


		if (arrayOfCorrectGuesses.join('') === answer) {
			$('#exampleModalCenter2').modal('show')
			setTimeout(function () {
				$('#exampleModalCenter2').modal('show')
			}, 100);
		}
	};

	return arrayOfCorrectGuesses;
};

function handleWrongGuesses(result, guess) {
	let numberOfGuesses = 0;

	if (result === true) {
		const previousGuess = document.querySelector('.previous-guess');
		const guessesAddedToList = document.createElement('li');
		guessesAddedToList.className = 'list-guesses';
		guessesAddedToList.innerHTML = guess.value + ',';
		previousGuess.insertAdjacentElement('beforeend', guessesAddedToList);
		numberOfGuesses++;
		drawCircle();
	}
	if (result === true && numberOfGuesses === 2) {
		drawBody();
	}
	if (result === true && numberOfGuesses === 3) {
		drawRightArm();
	}
	if (result === true && numberOfGuesses === 4) {
		drawLeftArm();
	}
	if (result === true && numberOfGuesses === 5) {
		drawRightLeg();
	}
	if (result === true && numberOfGuesses === 6) {
		drawLeftLeg();
	}
	if (numberOfGuesses === 6) {
		previousGuess.innerHTML = "";
		previousGuess.innerHTML = `<li class="list-guesses">You Lose!</li>`;
	}
};

function guessComparison(event) {
	const guess = document.querySelector('.form-control');
	const correctGuesses = document.querySelectorAll('.correct-guesses');


	if (onlyLetterCheck() === false) {
		guess.value = "";
		return;
	}
	const comparisonResults = comparing(correctGuesses, guess);

	const result = comparisonResults.every(function (element, index) {
		return element === "incorrect";
	});

	winnerComparison(correctGuesses);
	handleWrongGuesses(result, guess);
	guess.value = "";
};


submit.addEventListener('click', guessComparison);

page.addEventListener('keydown', function (event) {
	if (event.keyCode === 13) {
		guessComparison();
	}
});

function drawCircle() {
	//circle
	ctx.beginPath();
	ctx.arc(295, 220, 50, 0, 2 * Math.PI);
	ctx.stroke();
};

function drawBody() {
	// straight line for the body 
	ctx.beginPath();
	ctx.moveTo(300, 500);
	ctx.lineTo(300, 270);
	ctx.stroke();
};

function drawRightArm() {
	//right arm
	ctx.moveTo(300, 350);
	ctx.lineTo(400, 300);
	ctx.stroke();
};

function drawLeftArm() {
	//left arm
	ctx.moveTo(300, 350);
	ctx.lineTo(200, 300);
	ctx.stroke();
};

function drawRightLeg() {
	//right leg
	ctx.moveTo(369, 525);
	ctx.lineTo(300, 495);
	ctx.stroke();
};

function drawLeftLeg() {
	//left leg
	ctx.moveTo(230, 520);
	ctx.lineTo(300, 495);
	ctx.stroke();
}
