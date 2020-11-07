
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, centre, right, left, ground, dustbinImage;



function preload()
{
	//dustbinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper (100,500,25);

	centre = new Dustbin(600,585,140,10);

	left = new Dustbin(526,511,10,180);

	right = new Dustbin(674,520,10,170);
	
	ground = new Ground(400,600,800,20);
	
	Engine.run(engine);
  
}


function draw(){
  rectMode(CENTER);
  background(200);
  drawSprites();
  
  left.display();
  right.display();
  ball.display();
  centre.display();
  ground.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-105})
	}
}



