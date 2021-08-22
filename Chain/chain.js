function Chain (x, y, radius, numberOfParticles, distanceBetweenParticles, world, letters = [], options) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.numberOfParticles = numberOfParticles;
    this.distanceBetweenParticles = distanceBetweenParticles;
    this.particles = [];
    this.constraints = [];
    this.world = world;
    this.letters = letters;
    this.options = options;

    this.init = function () {
        for (let i = 0; i < this.numberOfParticles; i++) {
            if (letters[i]) {
                this.particles[i] = new Particle(this.x + (2 * this.radius * i) + (i * this.distanceBetweenParticles), this.y, this.radius, this.world, false, true, letters[i]);
            } else {
                this.particles[i] = new Particle(this.x + (2 * this.radius * i) + (i * this.distanceBetweenParticles), this.y, this.radius, this.world);

            } 
            let constraint;
            if (i == 0 && this.options.mountToPointFirstParticle && this.options.pointOneX && this.options.pointOneY && this.options.firstRobLength) {
                constraint = Constraint.create({
                    pointA: {x : this.options.pointOneX, y : this.options.pointOneY},
                    bodyB: this.particles[i].body,
                    stiffness: 0,
                    damping : 0.7,
                    length: this.options.firstRobLength
                });
                this.constraints.push(constraint);
                Matter.World.add(this.world, constraint)
            }
            if (i > 0) {
                if (i == (numberOfParticles - 1) && this.options.mountToPointLastParticle && this.options.pointTwoX && this.options.pointTwoY) {
                    constraint = Constraint.create({
                        pointA: {x : this.options.pointTwoX, y : this.options.pointTwoY},
                        bodyB: this.particles[i].body,
                        stiffness: 0,
                        damping : 0.7,
                        length: this.options.lastRobLength
                    });
                    this.constraints.push(constraint);
                    Matter.World.add(this.world, constraint)
                }
                constraint = Constraint.create({
                    bodyA: this.particles[i-1].body,
                    bodyB: this.particles[i].body,
                    // pointA : {x: this.radius, y: 0},
                    // pointB : {x: -this.radius, y: 0},
                    stiffness: 0,
                    damping : 0.7,
                    length: this.distanceBetweenParticles + (2 * this.radius)
                });
                this.constraints.push(constraint);
                Matter.World.add(this.world, constraint)
            }
        }
    }

    this.display = function () {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].display();
        }
        if (this.options.showConstraints) {
            for (let i = 0; i < this.constraints.length; i++) {
                stroke(128);
                strokeWeight(2);  
                Helpers.drawConstraint(this.constraints[i]);
            }
        }
    }


}