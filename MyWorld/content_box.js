function ContentBox(x, y, width, height, title, content, contentColor, boxColor, world, isCircle = false) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.title = title;
    this.content = content;
    this.contentColor = contentColor;
    this.boxColor = boxColor;
    this.world = world;
    this.isCircle = isCircle;

    if (!isCircle) {
        this.body = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height);
    } else {
        this.body = Matter.Bodies.circle(this.x, this.y, this.width/2);
    }
    this.body.restitution = 0.5
    Matter.World.add(world, this.body)


    this.display = function () {
        fill(this.boxColor);
        push();
        Helpers.drawBody(this.body);
        stroke(0, 100, 0);
        strokeWeight(2);
        Helpers.drawStroke(this.body);
        noStroke();
        const pos = this.body.position;
        const angle = this.body.angle;
        translate(pos.x, pos.y);
        if (isCircle) {
            rotate(angle);
        }
        textAlign(CENTER, CENTER);
        textSize(width / this.title.length * 3 / 2);
        fill(this.contentColor)
        text(this.title, 0, 0);
        pop();
    }

    this.removeFromWorld = function () {
        Matter.World.remove(this.world, this.body);
    }

    this.quickClicked = function (event) {
        let mousePosition;
        if (event.type === "touchend") {
            mousePosition = {x : mouseX, y : mouseY};
        } else {
            mousePosition = {x : event.x, y : event.y};
        }
        let position = this.body.position;
        if (!this.content) {
            return;
        }
        if (this.isCircle) {
            let distance = dist(mousePosition.x, mousePosition.y, position.x, position.y);
            if (distance < width/2) {console.log("alert")
                showAlert(this.content);
            }
        } else {
            if (((position.x - this.width/2) < mousePosition.x) && ((position.x + this.width/2) > mousePosition.x) &&
                ((position.y - this.height/2) < mousePosition.y) && ((position.y + this.height/2) > mousePosition.y)) {
                    showAlert(this.content);
                }
        }
    }
}