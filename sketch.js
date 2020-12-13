
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var snake;
var food;
var h, w;
var tile=20;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	w = floor(width/tile);
	h = floor(height/20);

	frameRate(5);

	snake = new Snake();
	foodLocation();


  
}


function draw() {
	scale(tile);
  background(0);

  if(snake.eat(food)){
	foodLocation();
  }

  snake.update();
  snake.display();

  if(snake.endGame()){
	text("Game Over", 170, 200);
  }

  fill(255);
  rect(food.x, food.y, 1, 1);

}

function foodLocation(){
	var x = floor(random(w));
	var y = floor(random(h));

	foods = createVactor(x, y);
}

function keyPressed(){
	if(keyCode===LEFT_ARROW){
		snake.setDir(-1, 0);
	} else if(keyCode===RIGHT_ARROW){
		snake.setDir(1, 0);
	} else if(keyCode===UP_ARROW){
		snake.setDir(0, -1);
	} else if(keyCode===DOWN_ARROW){
		snake.setDir(0, 1);
	} else if(key===" "){
		snake.grow();
	}
}