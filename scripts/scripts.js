let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let answer = "house";
let submit = document.querySelector('.submit-btn');
let guessContainer = document.querySelector('.guess-container');





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

submit.addEventListener('click', function(){
	
	let guess = document.querySelector('.form-control').value;
	let correctGuesses = document.querySelectorAll('.correct-guesses');
	console.log(correctGuesses);
		console.log('this is the guess:', guess);
	for (i = 0; i < answer.length; i++){
		console.log('each letter', answer[i]);
		if (guess === answer[i]) {
			correctGuesses[i].innerText = guess;
			
			console.log("belongs here:", i);
					
			console.log('true');
		}
		/*
		1. compare answer to input with if statement
		2. if guess is correct put into div squares
		3. if incorrect guess put letter in array in previous-guesses div
		
		
		
		*/
		
	};
	
  
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






