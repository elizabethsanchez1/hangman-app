let c = document.getElementById('myCanvas');
let ctx = c.getContext("2d");
let answer = "house";
let submit = document.querySelector('.submit-btn');
let guessContainer = document.querySelector('.guess-container');
let page = document.querySelector('body');
let newGame = document.querySelector('.new-game');
let previousGuess = document.querySelector('.previous-guess');


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
			//console.log('----Comparing true and false-----', guess.every(guessComparison))
		} else {
			comparisonResults.push("incorrect");
			//check array for any true or false values 
		}
	};
	guess.value = "";
	console.log("comparison results", comparisonResults);
	const result = comparisonResults.every(function(element, index){
		//console.log("element-----", element);
		//console.log("index-----", index);
		console.log("element --",element === "incorrect");
		
		return element === "incorrect";
	})
	
	/* 
	Next steps 
	
	1. figure out whether or not we have to put guess on the page
	2. figure out how you will put multiple gueses on the page
	3. put guesses one by one on the page 
	*/
	
	
	
	let guessesAddedToList = document.createElement('li');
	guessesAddedToList.innerHTML = guess;
	previousGuess.insertAdjacentElement('beforeend', guessesAddedToList);
	console.log("guess list" , guessesAddedToList);


	
	console.log('what is in result', result);
	
};

submit.addEventListener('click', guessComparison);

page.addEventListener('keydown', function(event) {
	if(event.keyCode === 13) {
		guessComparison();
	}
});


//circle
ctx.beginPath();
ctx.arc(295, 220, 50, 0, 2 * Math.PI);
ctx.stroke();

// straight line for the body 
ctx.beginPath();
ctx.moveTo(300, 500);
ctx.lineTo(300, 270);
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






