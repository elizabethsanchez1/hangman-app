let c = document.getElementById('myCanvas');
let ctx = c.getContext("2d");
let answer = "house";
let submit = document.querySelector('.submit-btn');
let guessContainer = document.querySelector('.guess-container');
let page = document.querySelector('body');
let newGame = document.querySelector('.new-game');
let previousGuess = document.querySelector('.previous-guess');
let numberOfGuesses = 0;




newGame.addEventListener('click', function() {
	
});



for (i = 0; i< answer.length; i++){
	let newSquare = document.createElement('div');
	newSquare.className = "correct-guesses";
	guessContainer.insertAdjacentElement('afterbegin', newSquare);	
};

//function createSquares(answerString) {
//	for (i = 0; i< answerString.length; i++){
//		let newSquare = document.createElement('div');
//		newSquare.className = "correct-guesses";
//		guessContainer.insertAdjacentElement('afterbegin', newSquare);	
//	};
//}
//
//createSquares(answer);


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
	let guess = document.querySelector('.form-control');
	let correctGuesses = document.querySelectorAll('.correct-guesses');
	let comparisonResults = [];
	

	for (i = 0; i < answer.length; i++){
		
		if (guess.value === answer[i]) {
			correctGuesses[i].innerText = guess.value;	
			comparisonResults.push("correct");
			
		} else {
			comparisonResults.push("incorrect");
			
		}
	};
	
	const result = comparisonResults.every(function(element, index){
		return element === "incorrect";
	})
	
	if ( result === true) {	
		let guessesAddedToList = document.createElement('li');
		guessesAddedToList.className = 'list-guesses';
		guessesAddedToList.innerHTML = guess.value;
		previousGuess.insertAdjacentElement('beforeend', guessesAddedToList);
		numberOfGuesses++;
		drawCircle();
	} if (result === true && numberOfGuesses === 2) {
		drawBody();
	}
	

	guess.value = "";
	//https://stackoverflow.com/questions/12691691/count-the-number-of-times-an-input-has-been-made-javascript
	
};

submit.addEventListener('click', guessComparison);

page.addEventListener('keydown', function(event) {
	if(event.keyCode === 13) {
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
};

//right arm
ctx.moveTo(300, 350);
ctx.lineTo(400, 300);
//left arm
ctx.moveTo(300, 350);
ctx.lineTo(200, 300);
//right leg
ctx.moveTo(369, 525);
ctx.lineTo(300, 495);
//left leg
ctx.moveTo(230, 520);
ctx.lineTo(300, 495);

ctx.stroke();






