function init(){
	sprite = document.getElementById("sprite");
	document.onkeydown = keyListener;
}

function keyListener(e){
	if(!e){
		e = window.event;
	}
	if(e.keyCode == 37){
		moveSprite(-10,0);
	}
	if(e.keyCode == 38){
		moveSprite(0, -10);
	}

	if(e.keyCode == 39){
		moveSprite(10, 0);
	}

	if(e.keyCode == 40){
		moveSprite(0, 10);
	}
}