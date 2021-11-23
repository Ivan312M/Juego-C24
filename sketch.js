const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg;
var towerImg;
var canon;
var cannonball;
var angle;
var balls = [];

function preload() {
 backgroundImg = loadImage("./assets/background.gif"); 
 towerImg = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 15;
  
   
  var option ={
    isStatic: true
  };

  ground = Bodies.rectangle(0, height-1, width*2, 1, option);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, option);
  World.add(world, tower);

  canon = new Canon(180, 110, 130, 100, angle);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width*2, 1);
  push();
  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 160, 310);
  pop();
  for(var i = 0; i < balls.length;i++){
    showCannonballs(balls[i]);
  }
  canon.display();
}

function showCannonballs(ball){
  if(ball){
    ball.display();
  }
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    balls[balls.length-1].shoot();

  }
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    cannonball = new cannonBall(canon.x, canon.y);
    balls.push(cannonball);
  }
}

