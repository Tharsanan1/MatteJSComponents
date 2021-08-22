function ContentBox(x, y, width, height, content, contentColor, boxColor, world) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.content = content;
    this.contentColor = contentColor;
    this.boxColor = boxColor;

    this.body = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height);
    this.body.restitution = 0.5
    Matter.World.add(world, this.body)
    this.display = function () {
        fill(this.boxColor);
        Helpers.drawBody(this.body);

        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        // rotate(angle);
        textAlign(CENTER, CENTER);
        textSize(width / this.content.length);
        fill(this.contentColor)
        text(this.content, 0, 0);
        pop();
    }
}