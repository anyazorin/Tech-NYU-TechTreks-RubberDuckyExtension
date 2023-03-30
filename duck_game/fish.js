class Fish {
  
  constructor() {
    this.size = 75;
    this.x = width;
    this.y = height - this.size;
  }
  
  move() {
    this.x -= 11;
    
  }
  
  show() {
    image(fishImage, this.x, this.y, this.size, this.size);
     // fill(255,50);
     // ellipseMode(CORNER);
     // ellipse(this.x,this.y,this.size,this.size);
  }
  
  
}