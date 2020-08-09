var colors = [];
var pickedColor ;
var numSquares = 6;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");

init();
function init(){
	setupModeButtons();
	setupSquare();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i< modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
		 this.classList.add("selected");
		 modeButtons[0].classList.remove("selected");
		 modeButtons[1].classList.remove("selected");
		 this.textContent === "Easy" ? numSquares = 3: numSquares = 6 ;
		 reset();});}
}

function setupSquare(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct !!!"
				resetButton.textContent = "Play Again" ;
				changeColors(clickedColor);
				h1.style.background = clickedColor;}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again !!!"}});}
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}};
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
};
function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
};
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};
resetButton.addEventListener("click", function(){
	reset();
});
function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++ ){
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	}else{
		squares[i].style.display = "none";
	}
}
	h1.style.background = "steelblue";
}