class cannonball {
    constructor(x, y) 
    {
      var options = {
        isStatic: true
      };
      this.r = 30;
      this.body = Bodies.circle(x, y, this.r, options);
      this.trajectory =[];
      this.image = loadImage("./assets/cannonball.png");
      World.add(world, this.body);
    }
  
    shoot() {
      var newAngle = cannon.angle - 28;
      newAngle = newAngle *(3.14/180)
      var velocity = p5.Vector.fromAngle(newAngle);
      console.log(velocity);
      velocity.mult(0.5);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, {
        x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
    }
  
    display() 
    {
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.r, this.r);
      pop();

      if(this.body.speed> 10 && pos.x>100) {
        var position = [pos.x, pos.y];
        this.trajectory.push(position);

      }

      

      //this.trajectory = [[x1, y1], [x2, y2], [x3, y3].....]

      for(var index =0; index<this.trajectory.length; index++){
        image(this.image, this.trajectory[index][0], this.trajectory[index][1], 5 ,5);
      }

    }
  }