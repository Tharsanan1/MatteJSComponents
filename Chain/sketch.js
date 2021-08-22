// Benedikt Groß
// Example is based on examples from: http://brm.io/matter-js/, https://github.com/shiffman/p5-matter

const educationDetails = [
  {
    id : 1,
    title : "High School",
    content : ""
  },
  {
    id : 1,
    title : "Degree",
    content : ""
  }

]

const experienceDetails = [
  {
    id : 1,
    title : "High School",
    content : ""
  },
  {
    id : 1,
    title : "Degree",
    content : ""
  }

]

const projectDetails = [
  {
    id : 1,
    title : "High School",
    content : ""
  },
  {
    id : 1,
    title : "Degree",
    content : ""
  }

]





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

let exampleContent;

let educationContents = [];
let experienceContents = [];
let projectContents = [];

function setup () {
  const canvas = createCanvas(windowWidth, windowHeight)

  let buttonEducation = createButton('Education')
  buttonEducation.position(windowWidth - 140, 20)
  buttonEducation.mousePressed(educationClicked)

  let buttonCloseEducation = createButton('&#10006;')
  buttonCloseEducation.position(windowWidth - 40, 20)
  buttonCloseEducation.mousePressed(educationCloseClicked)

  let buttonExperience = createButton('Experiences')
  buttonExperience.position(windowWidth - 140, 60)
  buttonExperience.mousePressed(experienceClicked)

  let buttonCloseExperience = createButton('&#10006;')
  buttonCloseExperience.position(windowWidth - 40, 60)
  buttonCloseExperience.mousePressed(experienceCloseClicked)

  let buttonProjects = createButton('Projects')
  buttonProjects.position(windowWidth - 140, 100)
  buttonProjects.mousePressed(projectsClicked)

  let buttonCloseProjects = createButton('&#10006;')
  buttonCloseProjects.position(windowWidth - 40, 100)
  buttonCloseProjects.mousePressed(projectsCloseClicked)

  let buttonGoRight = createButton('>')
  buttonGoRight.position(windowWidth - 100, 140)
  buttonGoRight.mousePressed(goRight)

  let buttonGoLeft = createButton('<')
  buttonGoLeft.position(windowWidth - 140, 140)
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

  exampleContent = new ContentBox(100, 100, 100, 100, 'hello', '', 50, 255, engine.world);

  car = new Car(300, 300, 30, 100, 60, engine.world)
  car.init()

  // ground
  ground = Bodies.rectangle(width / 2, height - 15, width, 30, {isStatic: true})
  console.log(ground)
  World.add(engine.world, [ground])
  ground.friction = 1;

  // left tiled ground
  leftTiltedGround = Bodies.rectangle(50-(windowWidth) * Math.cos(Math.PI/4), windowHeight - ((windowWidth) * Math.cos(Math.PI/4)), windowWidth*2, 30, {isStatic: true, angle: Math.PI / 4})
  World.add(engine.world, [leftTiltedGround])
  leftTiltedGround.friction = 0;

  // left tiled ground
  rightTiltedGround = Bodies.rectangle(-50 + windowWidth + (windowWidth) * Math.cos(Math.PI/4), windowHeight - ((windowWidth) * Math.cos(Math.PI/4)), windowWidth*2, 30, {isStatic: true, angle: -Math.PI / 4})
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

  exampleContent.display();

  educationContents.forEach(element => {
    element.display();
  });

  experienceContents.forEach(element => {
    element.display();
  });

  projectContents.forEach(element => {
    element.display();
  });

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
  removeAllFromArray(educationContents);
  educationContents = [];
  educationDetails.forEach(element => {
    let contentBox = new ContentBox(random(windowWidth/5, windowWidth * 4 / 5), random(windowHeight/5, windowHeight * 2 / 5), 80, 80, element.title, element.content, 50, 255, engine.world, true);
    educationContents.push(contentBox);
  });
}

function experienceClicked () {
  removeAllFromArray(experienceContents);
  experienceContents = [];
  experienceDetails.forEach(element => {
    let contentBox = new ContentBox(random(windowWidth/5, windowWidth * 4 / 5), random(windowHeight/5, windowHeight * 2 / 5), 80, 80, element.title, element.content, 50, 255, engine.world);
    experienceContents.push(contentBox);
  });
}

function projectsClicked () {
  removeAllFromArray(projectContents);
  projectContents = [];
  projectDetails.forEach(element => {
    let contentBox = new ContentBox(random(windowWidth/5, windowWidth * 4 / 5), random(windowHeight/5, windowHeight * 2 / 5), 80, 80, element.title, element.content, 50, 255, engine.world);
    projectContents.push(contentBox);
  });
}

function removeAllFromArray(arr) {
  arr.forEach(element => {
    element.removeFromWorld();
  });
}


function educationCloseClicked() {
  removeAllFromArray(educationContents);
  educationContents = [];
}

function experienceCloseClicked () {
  removeAllFromArray(experienceContents);
  experienceContents = [];
}

function projectsCloseClicked () {
  removeAllFromArray(projectContents);
  projectContents = [];
}

let lastPressedTime = 0;
const timeForQuickClick = 150;
function mouseClicked (event) {
  let now = Date.now();
  let diff = now - lastPressedTime;
  if (diff < timeForQuickClick) {
    console.log("q")
      quickClick(event);
  } 
}

function mousePressed () {
    lastPressedTime = Date.now();
}

function touchStarted()  {
    lastPressedTime = Date.now();
}

function touchEnded() {
  let now = Date.now();
  let diff = now - lastPressedTime;
  if (diff < timeForQuickClick) {
      quickClick(event);
  } 
}

function quickClick(event) {
  educationContents.forEach(element => {
    element.quickClicked();
  });

  experienceContents.forEach(element => {
    element.quickClicked();
  });

  projectContents.forEach(element => {
    element.quickClicked();
  });
}