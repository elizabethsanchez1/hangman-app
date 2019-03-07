const c = document.getElementById('myCanvas');
const ctx = c.getContext("2d");
const answer = "house";
const submit = document.querySelector('.submit-btn');
const page = document.querySelector('body');
let numberOfGuesses = 0;


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
	for (i = 0; i < answer.length; i++) {
		const newSquare = document.createElement('div');
		newSquare.className = "correct-guesses";
		guessContainer.insertAdjacentElement('afterbegin', newSquare);
	};
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

function guessComparison(event) {
	const guess = document.querySelector('.form-control');
	const correctGuesses = document.querySelectorAll('.correct-guesses');
	const comparisonResults = [];

	if (onlyLetterCheck() === false) {
		guess.value = "";
		return;
	}

	//	answer.forEach(function(item) {
	//		if (guess.value === answer[item]) {
	//			correctGuesses[item].innerText = guess.value;
	//			comparisonResults.push("correct");
	//		} else {
	//			comparisonResults.push("incorrect");
	//		}
	//	});
	//	const result = comparisonResults.every(function (element, index) {
	//		return element === "incorrect";
	//	});
	//		
	function comparing() {
		for (i = 0; i < answer.length; i++) {
			if (guess.value === answer[i]) {
				correctGuesses[i].innerText = guess.value;
				comparisonResults.push("correct");
			} else {
				comparisonResults.push("incorrect");
			}
		};
	};
	comparing();

	const result = comparisonResults.every(function (element, index) {
		return element === "incorrect";
	});

function winnerComparison() {
	const arrayOfCorrectGuesses = [];
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
}
	winnerComparison();
	
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
