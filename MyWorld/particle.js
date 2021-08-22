// const drawBody = Helpers.drawBody;

function Particle (x, y, r, world, isStatic = false, showLetter = false, letter) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.showLetter = showLetter;
    this.letter = letter;
    this.body = Bodies.circle(x, y, r, {
        isStatic : isStatic
    });
    this.body.restitution = 1
    Matter.World.add(world, this.body)

    this.display = function () {
        fill(255);
        Helpers.drawBody(this.body);
        if (showLetter) {
            push();
            fill(0, 102, 153);
            textAlign(CENTER, CENTER);
            textSize(this.r)
            text(letter, this.body.position.x , this.body.position.y);
            pop();
        }
    }
}