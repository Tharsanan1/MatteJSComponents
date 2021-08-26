function Container (x, y, height, width, category, mask, world, title, titleColor) {
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
    this.title = title;
    this.titleColor =  titleColor;
    this.body.restitution = 0
    Matter.World.add(world, this.body)
    this.display = function () {
        fill('#ccebff');
        Helpers.drawBody(this.body);
        if (this.title && this.titleColor) {
            push();
            const pos = this.body.position;
            const angle = this.body.angle;
            translate(pos.x, pos.y);
            // console.log(Math.round(pos.x), Math.round(pos.y));
            rotate(angle);
            textAlign(CENTER, CENTER);
            textSize(width / this.title.length * 3 / 2);
            fill(this.titleColor)
            text(this.title, 0, 0);
            pop();
        }
    }

}