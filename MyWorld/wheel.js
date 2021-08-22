function Wheel (x, y, r, world, category, mask) {
  this.x = x
  this.y = y
  this.r = r
  this.body = Bodies.circle(x, y, r)
  this.body.collisionFilter = {
    'group': 0,
    'category': category,
    'mask': mask
  }
  this.body.restitution = 1
  this.body.friction = 1
  this.body.density = 10
  Matter.World.add(world, this.body)

  this.display = function () {
    push()
    noStroke()
    fill(100)
    ellipse(this.body.position.x, this.body.position.y, 2 * this.r)
    stroke(255, 204, 0)
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    line(0, 0, this.r, 0)
    pop()
  }
}

