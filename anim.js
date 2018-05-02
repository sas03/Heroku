var sprite;
var x,y;

var MIN_X = 5;
var MAX_X = 1000;
var MIN_Y = 5;
var MAX_Y = 280;

function init(){
	sprite = document.getElementById("sprite");
}

function moveSprite(dx, dy){
	var surface = document.getElementById("surface");

	x = parseInt(sprite.style.left);
	y = parseInt(sprite.style.top);

	x += dx;
	y += dy;

	checkBounds();

	sprite.style.left = x + "px";
	sprite.style.top = y + "px";

	var output = document.getElementById("output");
	output.innerHTML = "x: " + x + ", y: " + y;
}

function checkBounds(){
	if(x > MAX_X){
		x = MIN_X;
	}
	if(x < MIN_X){
		x = MAX_X;
	}
	if(y > MAX_Y){
		y = MIN_Y;
	}
	if(y < MIN_Y){
		y = MAX_Y;
	}
}