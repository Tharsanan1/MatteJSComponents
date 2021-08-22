function Car (x, y, wheelRadius, containerWidth, containerHeight, world, title, titleColor) {
  this.x = x
  this.y = y
  this.wheelRadius = wheelRadius
  this.containerWidth = containerWidth
  this.containerHeight = containerHeight
  this.wheelOne
  this.wheelTwo
  this.container
  this.world = world
  this.constraints = []
  this.title = title;
  this.titleColor = titleColor;
  this.init = function () {
    this.wheelOne = new Wheel(x, y, this.wheelRadius, world, 2, 3)
    this.wheelTwo = new Wheel(x + containerWidth, y, this.wheelRadius, world, 2, 3)
    this.container = new Container((x + (containerWidth / 2)), (y - (containerHeight / 2)), containerHeight, containerWidth, 2, 1, this.world, this.title, this.titleColor)
    let constraintWithFirstWheel = Constraint.create({
      bodyA: this.container.body,
      bodyB: this.wheelOne.body,
      pointA: { x: -this.containerWidth / 2, y: this.containerHeight / 2},
      stiffness: 0,
      length: 0
    })
    let constraintWithSecondWheel = Constraint.create({
      bodyA: this.container.body,
      bodyB: this.wheelTwo.body,
      pointA: { x: this.containerWidth / 2, y: this.containerHeight / 2},
      stiffness: 0,
      length: 0
    })
    this.constraints.push(constraintWithFirstWheel)
    this.constraints.push(constraintWithSecondWheel)
    Matter.World.add(this.world, [constraintWithFirstWheel, constraintWithSecondWheel])
  }

  this.display = function () {
    this.container.display()
    this.wheelTwo.display()
    this.wheelOne.display()
    for (let i = 0; i < this.constraints.length; i++) {
      stroke(128)
      strokeWeight(2)
      Helpers.drawConstraint(this.constraints[i])
    }
  }

  this.goRight = function () {
      Matter.Body.setAngularVelocity(this.wheelOne.body, 0.3);
  }

  this.goLeft = function () {
      Matter.Body.setAngularVelocity(this.wheelOne.body, -0.3);
  }
}
