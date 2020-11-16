const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Matter.Body.create(Bob);

    roofObject = new Roof(600, height, 1200, 20);
	
    bobObject1 = new Bob(750,380,50,50);
    bobObject2 = new Bob(825,380,50,50);
	  bobObject3 = new Bob(900,380,50,50);
  	bobObject4 = new Bob(675,380,50,50);
	  bobObject5 = new Bob(600,380,50,50);

    rope1 = new Rope(bobObject1.body, roofObject.body);
    rope2 = new Rope(bobObject2.body, roofObject.body);
    rope3 = new Rope(bobObject3.body, roofObject.body);
    rope4 = new Rope(bobObject4.body, roofObject.body);
    rope5 = new Rope(bobObject5.body, roofObject.body);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
  bobObject1.display();  
  bobObject2.display();  
  bobObject3.display();  
  bobObject4.display();  
  bobObject5.display();  
  roofObject.display();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){

      Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -200, y: -54})

  }
}


