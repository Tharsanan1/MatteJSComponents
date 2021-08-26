// Benedikt Groß
// Example is based on examples from: http://brm.io/matter-js/, https://github.com/shiffman/p5-matter

const educationDetails = [
  {
    id : 1,
    title : "High School",
    content : "<h3>High School</h3> <p>T/ R.K.M Koneswera Hindu college, Trincomalee</p> <p>Advance level : Mathematics stream</p> <p>Subjects and final results : </p> <ul> <li>Mathematics : <b>A</b></li> <li>Physics : <b>A</b></li> <li>Chemistry : <b>A</b></li> <li>Distric rank : <b>1</b></li> <li>Island rank : <b>11</b></li> <li>Z-score : <b>2.8424</b></li> </ul> "
  },
  {
    id : 2,
    title : "Degree",
    content : "<h3>Bachelor's degree</h3> <p>University of Moratuwa</p> <p>Computer science and Engineering (Hons) : (2015 - 2019)</p> <p>GPA : <b>3.80</b></p> "
  }

]

const experienceDetails = [
  {
    id : 1,
    title : "Sysco LABS",
    content : "<h3>Software engineering intern at Sysco LABS</h3> <p>2018 (July - December)</p> <ul> <li>Designed and developed cloud server and resource management system for their internal usage.</li> <li>Dockerized multiple products to support ECR deployments.</li> <li>Developed and automated unit tests.</li> <li>Followed SCRUM process framework.</li> <li>Worked with JIRA, Bitbucket, AWS, Docker, Jenkins, Selenium Java, Node, React.</li> </ul> "
  },
  {
    id : 2,
    title : "G S O C",
    content : "<h3>Google Summer of Code student participant - 2019</h3> <ul> <li>Designed and developed Intellij plugin for CPAchecker tool using Gitlab as a version control system.</li> <li>Used Gitlab CI/CD for testing code style, bugs and for deployment.</li> <li>Used Gradle build tool.</li> </ul> "
  },
  {
    id : 3,
    title : "Enactor",
    content : "<h3>Software Engineer at Enactor - 2020 Feb - now</h3> <ul> <li>3DS server implementation.</li> <li>Implemented eCommerce web payment feature in Enactor Payment Portal.</li> <li>Visa, Mastercard and Amex accreditation certification for 3DS server.</li> <li>Elavon and Amex payment authorization accreditation certification for Enactor Payment Portal.</li> <li>Implemented Klarna support to Enactor Payment portal</li> <li>Implemented Enactor Pay By Link.</li> <li>Implemented identity server - OAuth 2.0</li> </ul> "
  }
]

const projectDetails = [
  {
    id : 1,
    title : "SIDDHI-LLVM",
    content : "<h3>SIDDHI-LLVM</h3> <ul> <li>It is my Final year group project.</li> <li>Designed multiple architectures to solve the performance problem that already existed in Siddhi stream processing engine.</li> <li>Developed a static compiler for Siddhi query language to produce synchronous stream processor.</li> <li>Designed LLVM passes to automatically convert sync code to asynchronous code on demand.</li> <li>Implemented genetic algorithm to automatically fine tune stream processor related configurations.</li> <li>Technologies : <b>ANTLR , LLVM , CLANG , JAVA , PYTHON , C++</b></li> </ul> "
  },
  {
    id : 2,
    title : "INTELLIJ PLUGIN",
    content : "<h3>CPACHECKER INTELLIJ PLUGIN</h3> <ul> <li>Google summer of code project.</li> <li>Proposed and developed an Intellij plugin to support CPAchecker framework in CLion IDE.</li> <li>Used Gitlab CI/CD pipeline to check code style, bugs and for continuous deployment.</li> <li>Technologies : <b>JAVA , GRADLE, GITLAB-CI/CD</b></li> </ul> "
  },
  {
    id : 3,
    title : "AWS-TRACKER",
    content : "<h3>AWS-TRACKER</h3> <ul> <li>Internship group project.</li> <li>Designed and developed AWS resources management system for Sysco LABS internal usage.</li> <li>Used Gitlab CI/CD pipeline to check code style, bugs and for continuous deployment.</li> <li>Implemented CI/CD pipeline in Jenkins for testing and deployment.</li> <li>Technologies : <b>NODE , MONGO-DB , REACT</b></li> </ul> "
  },
  {
    id : 4,
    title : "DENGAI",
    content : "<h3>DENGAI</h3> <ul> <li>Academic group project.</li> <li>Implemented dengue cases prediction model using random forest, support vector regression, XGBoost and LSTM.</li> <li>Increased the accuracy of the prediction by bagging and boosting above implemented models.</li> <li>Technology : <b>PYTHON</b></li> </ul> "
  },
  {
    id : 5,
    title : "SYSTEM SCHEDULER",
    content : "<h3>OPERATING SYSTEM SCHEDULER</h3> <ul> <li>Designed and developed a visual simulation for round robin, shortest job next, shortest remaining time next and priority scheduling.</li> <li>Implemented functionalities for control the simulation speed and change scheduling options real-time.</li> <li>Technology : <b>C#</b></li> </ul> "
  },
  {
    id : 6,
    title : "CONTACT MANAGER",
    content : "<h3>CONTACT DETAILS MANAGER</h3> <ul> <li>Android application to manage visiting cards by converting them to digital form. Used object character recognition.</li> <li>Implemented an algorithm, based on tree data structure, to convert English sentences to card details.</li> </ul> "
  }
]

let smallProjectDetails = [
  
  {
    id : "1",
    title : "   1   ",
    content : '<b>Image Encryptor - (ReactJS)</b> - <a href="https://tharsanan1.github.io/ImageEncryptionWeb/">link</a>',
  },
  {
    id : "1",
    title : "   2   ",
    content : '<b>CVMaker - (ReactJS, Canvas)</b> -  <a href="https://github.com/Tharsanan1/CVMaker">link</a>',
  },
  {
    id : "1",
    title : "   3   ",
    content : '<b>Game Engine Paandi - (Java, Node, ReactJS)</b> - <a href="https://github.com/Tharsanan1/PaandiTamilGameHelper">link</a>',
  },
  {
    id : "1",
    title : "   4   ",
    content : '<b>Virtual KeyBoard - (Python, OpenCV)</b> - <a href="https://github.com/Tharsanan1/VirtualKeyboard">link</a>',
  },
  {
    id : "1",
    title : "   5   ",
    content : '<b>BiometricAuthentication - (Java)</b> - <a href="https://github.com/Tharsanan1/BiometricAuthentication">link</a>',
  },
  {
    id : "1",
    title : "   6   ",
    content : '<b>Interview Scheduler - (Java)</b> - <a href="https://github.com/Tharsanan1/InterviewScheduler">link</a>',
  },
  {
    id : "1",
    title : "   7   ",
    content : '<b>Authentication system - (NodeJS, MongoDB)</b> - <a href="http://tharsanan.cyou/authentication/sign-in/">link</a>',
  },
  {
    id : "1",
    title : "  8  ",
    content : '<b>Reverse proxy server using socket connections. - (NodeJS, MongoDB)</b> - <a href="https://github.com/Tharsanan1/SocketConnectedServers">link</a>'
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
let smallProjectContents = [];

let goRightDown = false;
let goLeftDown = false;
let buttonEducation;
function setup () {
  pixelDensity(1); // If its not set mobile devices show the animation in slow motion. Probably issue with p5 js rendering.
  const canvas = createCanvas(windowWidth, windowHeight)

  buttonEducation = createButton('Education')
  buttonEducation.position(windowWidth - 220, 20)
  buttonEducation.mousePressed(educationClicked)
  buttonEducation.size(160,60);

  let buttonCloseEducation = createButton('&#10006;')
  buttonCloseEducation.position(windowWidth - 50, 20)
  buttonCloseEducation.mousePressed(educationCloseClicked);
  buttonCloseEducation.size(40, 60);

  let buttonExperience = createButton('Experiences')
  buttonExperience.position(windowWidth - 220, 100)
  buttonExperience.mousePressed(experienceClicked)
  buttonExperience.size(160,60);

  let buttonCloseExperience = createButton('&#10006;')
  buttonCloseExperience.position(windowWidth - 50, 100)
  buttonCloseExperience.mousePressed(experienceCloseClicked);
  buttonCloseExperience.size(40, 60);

  let buttonProjects = createButton('Projects')
  buttonProjects.position(windowWidth - 220, 180)
  buttonProjects.mousePressed(projectsClicked);
  buttonProjects.size(160,60);

  let buttonCloseProjects = createButton('&#10006;')
  buttonCloseProjects.position(windowWidth - 50, 180)
  buttonCloseProjects.mousePressed(projectsCloseClicked);
  buttonCloseProjects.size(40,60);

  let buttonSmallProjects = createButton('Pet Projects')
  buttonSmallProjects.position(windowWidth - 220, 260)
  buttonSmallProjects.mousePressed(smallProjectsClicked);
  buttonSmallProjects.size(160,60);

  let buttonCloseSmallProjects = createButton('&#10006;')
  buttonCloseSmallProjects.position(windowWidth - 50, 260)
  buttonCloseSmallProjects.mousePressed(smallProjectsCloseClicked);
  buttonCloseSmallProjects.size(40,60);

  let buttonGoRight = createButton('>')
  buttonGoRight.position(windowWidth - 100, 340)
  buttonGoRight.mousePressed(goRight)
  buttonGoRight.size(90, 60);

  buttonGoRight.elt.addEventListener("touchstart", function () {
    goRightDown = true;
  }); 
  buttonGoRight.elt.addEventListener("touchend", function () {
    goRightDown = false;
  });  

  let buttonGoLeft = createButton('<')
  buttonGoLeft.position(windowWidth - 220, 340)
  buttonGoLeft.mousePressed(goLeft)
  buttonGoLeft.size(90, 60);
  buttonGoLeft.elt.addEventListener("touchstart", function () {
    goLeftDown = true;
  }); 
  buttonGoLeft.elt.addEventListener("touchend", function () {
    goLeftDown = false;
  });  

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
  if (goRightDown) {
    car.goRight()
  }
  if (goLeftDown) {
    car.goLeft()
  }
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

  smallProjectContents.forEach(element => {
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
  console.log("right")
  goRightDown = true;
  // car.goRight()
}

function goLeft () {
  goLeftDown = true;
  // car.goLeft()
}

function educationClicked () {
  removeAllFromArray(educationContents);
  educationContents = [];
  educationDetails.forEach(element => {
    let contentBox = new ContentBox(random(windowWidth/5, windowWidth * 4 / 5), random(windowHeight/5, windowHeight * 2 / 5), 80, 80, element.title, element.content, 50, '#ccddff', engine.world, false);
    educationContents.push(contentBox);
  });
}

function experienceClicked () {
  removeAllFromArray(experienceContents);
  experienceContents = [];
  experienceDetails.forEach(element => {
    let contentBox = new ContentBox(random(windowWidth/5, windowWidth * 4 / 5), random(windowHeight/5, windowHeight * 2 / 5), 80, 80, element.title, element.content, 50, '#ccffeb', engine.world);
    experienceContents.push(contentBox);
  });
}

function projectsClicked () {
  removeAllFromArray(projectContents);
  projectContents = [];
  projectDetails.forEach(element => {
    let contentBox = new ContentBox(random(windowWidth/5, windowWidth * 4 / 5), random(windowHeight/5, windowHeight * 2 / 5), 80, 80, element.title, element.content, 50, '#ffffe6', engine.world);
    projectContents.push(contentBox);
  });
}

function smallProjectsClicked () {
  removeAllFromArray(smallProjectContents);
  smallProjectContents = [];
  smallProjectDetails.forEach(element => {
    let contentBox = new ContentBox(random(windowWidth/5, windowWidth * 4 / 5), random(windowHeight/5, windowHeight * 2 / 5), 80, 80, element.title, element.content, 50, '#e6fff9', engine.world, true);
    smallProjectContents.push(contentBox);
  });

  for (let index = 0; index < 50; index++) {
    let contentBox = new ContentBox(random(windowWidth/5, windowWidth * 4 / 5), random(windowHeight/5, windowHeight * 2 / 5), 20, 20, '', '', 50, '#e6fff9', engine.world, true);
    smallProjectContents.push(contentBox);
    
  }
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

function smallProjectsCloseClicked () {
  removeAllFromArray(smallProjectContents);
  smallProjectContents = [];
}

let lastPressedTime = 0;
const timeForQuickClick = 200;
function mouseClicked (event) {
  console.log("click")
  goLeftDown = false;
  goRightDown = false;
  let now = Date.now();
  let diff = now - lastPressedTime;
  if (diff < timeForQuickClick) {
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
    console.log("q")
      quickClick(event);
  } 
}

function quickClick(event) {
  educationContents.forEach(element => {
    element.quickClicked(event);
  });

  experienceContents.forEach(element => {
    element.quickClicked(event);
  });

  projectContents.forEach(element => {
    element.quickClicked(event);
  });

  smallProjectContents.forEach(element => {
    element.quickClicked(event);
  });
}


