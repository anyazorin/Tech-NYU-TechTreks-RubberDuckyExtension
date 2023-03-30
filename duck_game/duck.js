class Duck {
  
    constructor() {
      this.size = 120;
      this.x = 50;
      this.y = height - this.size;
      this.vy = 0;
      this.bound = 1.6;
    }
  
    jump() {
      if (this.y == height - this.size) {
        this.vy = -25;
      }
    }
  
    hits(fish) {
      let x1 = this.x + this.size * 0.001;
      let y1 = this.y + this.size * 0.001;
      let x2 = fish.x + fish.size * 0.001;
      let y2 = fish.y + fish.size * 0.001;
      return collideCircleCircle(x1, y1, this.size, x2, y2, fish.size);
    }
  
    move() {
      this.y += this.vy;
      this.vy += this.bound;
      this.y = constrain(this.y, 0, height - this.size);
    }
  
    show() {
      //image(uImg, this.x, this.y, this.r, this.r);
      image(duckImage, this.x, this.y, this.size, this.size);
      
       // fill(255, 50);
       // ellipseMode(CORNER);
       // ellipse(this.x, this.y, this.size, this.size);  
    }
  }