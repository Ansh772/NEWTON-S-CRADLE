const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5;
var roof;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  	ball1=new Bob(250,300); 
	  ball2=new Bob(300,300); 
  	ball3=new Bob(350,300); 
  	ball4=new Bob(400,300); 
	  ball5=new Bob(450,300); 
  	roof=new Roof(350,100,300,30);
	  rope1=new Rope(ball1.body,roof.body,-100,0);
    rope2=new Rope(ball2.body,roof.body,-50,0);
    rope3=new Rope(ball3.body,roof.body,0,0);
    rope4=new Rope(ball4.body,roof.body,+50,0);
    rope5=new Rope(ball5.body,roof.body,+100,0);
    
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-730,y:0}); 
}; 
};