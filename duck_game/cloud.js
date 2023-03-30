class Cloud {
  
  constructor() {
    this.size = 75;
    this.x = width;
    this.y = 75;
    
    this.speed = 1;
  }
  
  move() {
    this.x -= 3;   
  }
  
  animate() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    
    if (this.x > windowWidth) {
      this.x -= random(-this.speed, this.speed);
    }
    
    if (this.y > windowHeight) {
      this.y -= random(-this.speed, this.speed);
    }
  }

  
  show() {
    image(cloudImage, this.x, this.y, this.size, this.size);
  }
  
}