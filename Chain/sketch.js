// Benedikt Groß
// Example is based on examples from: http://brm.io/matter-js/, https://github.com/shiffman/p5-matter

const Engine = Matter.Engine
const Render = Matter.Render
const World = Matter.World
const Bodies = Matter.Bodies
const Mouse = Matter.Mouse
const MouseConstraint = Matter.MouseConstraint
const Constraint = Matter.Constraint

let engine
let ground
let leftTiltedGround;
let rightTiltedGround;

let rigidParticle

let chain
let car

let box

let exampleContent;

function setup () {
  const canvas = createCanvas(windowWidth, windowHeight)

  let buttonEducation = createButton('Education')
  buttonEducation.position(windowWidth - 100, 20)
  buttonEducation.mousePressed(educationClicked)

  let buttonExperience = createButton('Experiences')
  buttonExperience.position(windowWidth - 100, 60)
  buttonExperience.mousePressed(experienceClicked)

  let buttonProjects = createButton('Projects')
  buttonProjects.position(windowWidth - 100, 100)
  buttonProjects.mousePressed(projectsClicked)

  let buttonGoRight = createButton('>')
  buttonGoRight.position(windowWidth - 60, 140)
  buttonGoRight.mousePressed(goRight)

  let buttonGoLeft = createButton('<')
  buttonGoLeft.position(windowWidth - 100, 140)
  buttonGoLeft.mousePressed(goLeft)
  // create an engine
  engine = Engine.create()

  // Create a chain
  chain = new Chain(50, 50, 20, 9, 5, engine.world, ['T', 'H', 'A', 'R', 'S', 'A', 'N', 'A', 'N'], {
    mountToPointFirstParticle: true,
    pointOneX: 50,
    pointOneY: 50,
    firstRobLength: 50,
    mountToPointLastParticle: false,
    pointTwoX: 500,
    pointTwoY: 50,
    lastRobLength: 150,
    showConstraints: false
  })
  chain.init()

  exampleContent = new ContentBox(100, 100, 100, 100, 'hello', 50, 255, engine.world);

  car = new Car(300, 300, 30, 100, 60, engine.world)
  car.init()
  box = Bodies.rectangle(200, 200, 80, 80)
  World.add(engine.world, [box])

  // ground
  ground = Bodies.rectangle(width / 2, height - 15, width, 30, {isStatic: true})
  console.log(ground)
  World.add(engine.world, [ground])
  ground.friction = 1;

  // left tiled ground
  leftTiltedGround = Bodies.rectangle(-windowWidth/5, windowHeight * 3/4, windowWidth*2, 30, {isStatic: true, angle: Math.PI / 4})
  World.add(engine.world, [leftTiltedGround])
  leftTiltedGround.friction = 0;

  // left tiled ground
  rightTiltedGround = Bodies.rectangle((windowWidth/5) + windowWidth, windowHeight * 3/4, windowWidth*2, 30, {isStatic: true, angle: -Math.PI / 4})
  World.add(engine.world, [rightTiltedGround])
  rightTiltedGround.friction = 0;


  // setup mouse
  const mouse = Mouse.create(canvas.elt)
  const mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams)
  mouseConstraint.mouse.pixelRatio = pixelDensity()
  World.add(engine.world, mouseConstraint)

  // run the engine
  Engine.run(engine)
}

function draw () {
  background(0)

  fill(255)
  chain.display()

  car.display()
  // rigidParticle.display()
  Helpers.drawBody(box)

  exampleContent.display();
  // draw ground.
  noStroke()
  fill(128)
  Helpers.drawBody(ground)
  Helpers.drawBody(leftTiltedGround)
  Helpers.drawBody(rightTiltedGround)

  Helpers.drawMouse(mouseConstraint)
}

function mousePressed () {
}

function goRight () {
  car.goRight()
}

function goLeft () {
  car.goLeft()
}

function educationClicked () {
}

function experienceClicked () {
}

function projectsClicked () {
}
