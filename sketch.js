var paper1 , ground1 , side1 , side2, bottom ,dustbinimg ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinimg=loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	side1 = new Dustbin(260,580,100,100);
	
	//side2 = 
	//World.add(world,side2);
	/*bottom = Bodies.rectangle(360,650,200,20);
	World.add(world,bottom);


	side1 = Bodies.rectangle(260,610,20,100);
	World.add(world,side1);
	side2 = Bodies.rectangle(460,610,20,100);
	World.add(world,side2);
	bottom = Bodies.rectangle(360,650,200,20);
	World.add(world,bottom);
   */
  paper1 = new Paper(200 , 200 );
	ground = new Ground(400,660,800,20);
	
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  Engine.update(engine);
  paper1.display();
  ground.display();
 // rect(260,610,20,100);
 // rect(460,610,20,100);
 // rect(360,650,200,20);
 side1.display();

  
}

function keyPressed( ) {
	if( keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body ,paper1.body.position , {x:50 ,y:-50});
	}
}



