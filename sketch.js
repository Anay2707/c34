const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,50);
    ball = new Ball(400,400);
    rope = new Rope(ball.body,{x:400 ,y:50});

    block1 = new Building(600,600,50,50);
    block2 = new Building(600,550,50,50);
    block3 = new Building(600,500,50,50);
    block4 = new Building(600,450,50,50);
    block5 = new Building(600,400,50,50);
    block6 = new Building(600,350,50,50);
    block7 = new Building(600,300,50,50);
    block8 = new Building(600,250,50,50);


    block1a = new Building(650,600,50,50);
    block2a = new Building(650,550,50,50);
    block3a = new Building(650,500,50,50);
    block4a = new Building(650,450,50,50);
    block5a = new Building(650,400,50,50);
    block6a = new Building(650,350,50,50);
    block7a = new Building(650,300,50,50);
    block8a = new Building(650,250,50,50);


    block1b = new Building(700,600,50,50);
    block2b = new Building(700,550,50,50);
    block3b = new Building(700,500,50,50);
    block4b = new Building(700,450,50,50);
    block5b = new Building(700,400,50,50);
    block6b = new Building(700,350,50,50);
    block7b = new Building(700,300,50,50);
    block8b = new Building(700,250,50,50);


    block1c = new Building(750,600,50,50);
    block2c = new Building(750,550,50,50);
    block3c = new Building(750,500,50,50);
    block4c = new Building(750,450,50,50);
    block5c = new Building(750,400,50,50);
    block6c = new Building(750,350,50,50);
    block7c = new Building(750,300,50,50);
    block8c = new Building(750,250,50,50);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 


  ground.display();
  ball.display();
  rope.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block1a.display();
  block2a.display();
  block3a.display();
  block4a.display();
  block5a.display();
  block6a.display();
  block7a.display();
  block8a.display();

  block1b.display();
  block2b.display();
  block3b.display();
  block4b.display();
  block5b.display();
  block6b.display();
  block7b.display();
  block8b.display();

  block1c.display();
  block2c.display();
  block3c.display();
  block4c.display();
  block5c.display();
  block6c.display();
  block7c.display();
  block8c.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y:mouseY });
}

