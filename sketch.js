
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

   ground = new Ground(width/2,690,width,20);
   left = new Ground(1100,620,20,120);
   right = new Ground(1350,620,20,120);

	//Create the Bodies Here.
	var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density: 1.2	
	}
  
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
	
}


function draw() {
	rectMode(CENTER);
	background(0);
	
	fill("white");
	ellipse(ball.position.x,ball.position.y,40);
	
	ground.show();
	left.show();
	right.show();
	
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}



