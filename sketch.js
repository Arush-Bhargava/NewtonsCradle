const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var thread1, thread2, thread3, thread4, thread5;
var roof;
var hanger1, hanger2, hanger3, hanger4, hanger5;

function preload() {}

function setup() {
  createCanvas(1000, 700);

  engine = Engine.create();
  world = engine.world;

  background(20, 20, 20);

  bob1 = new bob(360, 600, 60);
  bob2 = new bob(420, 600, 60);
  bob3 = new bob(480, 600, 60);
  bob4 = new bob(540, 600, 60);
  bob5 = new bob(600, 600, 60);

  roof = new Roof(480, 250, 300, 20);

  hanger1 = createSprite(360, 250, 10, 10);

  thread1 = new rope(bob1.body, roof.body, -120, 0);
  thread2 = new rope(bob2.body, roof.body, -60, 0);
  thread3 = new rope(bob3.body, roof.body, 0, 0);
  thread4 = new rope(bob4.body, roof.body, 60, 0);
  thread5 = new rope(bob5.body, roof.body, 120, 0);

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);

  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  thread1.display();
  thread2.display();
  thread3.display();
  thread4.display();
  thread5.display();

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, {
      x: -130,
      y: 145,
    });
  }
} 
