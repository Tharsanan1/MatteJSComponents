function Container (x, y, height, width, category, mask, world) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.category = category;
    this.mask = mask;
    this.body = Matter.Bodies.rectangle(x, y, width, height);
     this.body.collisionFilter = {
        'group': 0,
        'category': category,
        'mask': mask,
    };
    this.body.restitution = 0
    Matter.World.add(world, this.body)
    this.display = function () {
        Helpers.drawBody(this.body);
    }

}