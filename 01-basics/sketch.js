const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const drawBody = Helpers.drawBody;

let engine;

let boxA;
let boxB;
let ground;

function setup() {
  createCanvas(800, 600);

  // create an engine
  engine = Engine.create();

  let option = {
    collisionFilter : {
      group  : 1
    } 
  }

  // create two boxes and a ground
  boxA = Bodies.rectangle(200, 200, 80, 80);
  boxB = Bodies.rectangle(270, 50, 160, 80);
  
  console.log(boxA);
  ground = Bodies.rectangle(400, 500, 810, 10, {
    isStatic: true
  });
  Body.setDensity(boxA, 100);
  Body.setDensity(boxB, 0.1);

  // add all of the bodies to the world
  World.add(engine.world, [boxA, boxB, ground]);
  // Matter.Body.applyForce(boxA, (200,200), (0,0))
  // run the engine
  Engine.run(engine);
}

function draw() {
  background(0);

  fill(255);
  drawBody(boxA);
  drawBody(boxB);

  fill(128);
  drawBody(ground);
}

function mousePressed() {
  // Body.applyForce(boxA, {
  //   x: boxA.position.x,
  //   y: boxA.position.y
  // }, {
  //   x : 0,
  //   y : -0.2
  // })

  Body.setAngularVelocity(boxA, 0.1);
}
