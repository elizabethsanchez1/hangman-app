let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let answer = "house";
let submit = document.querySelector('.btn');
let guessContainer = document.querySelector('.guess-container');




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
  console.log("guess:", guess);
  
  
});

function guessSquares () {
let newSquare = document.createElement('div');
	console.log('newSquare');
	newSquare.className = 'guess-container';
	document.getElementsBy 
	
	
}





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






