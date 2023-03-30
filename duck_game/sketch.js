let duck;
let rains;
let duckImage;
let fishImage;
let backImage;
let redoImage;
let cloudImage;

//let successSound;
//let failSound;

let fishes = [];
let clouds = [];
let pour = [];

let counter = 0;
let screen = 0;

let gameState = true;

let scroll = 10;
let scrollBackground = 0;

function preload() {
  duckImage = loadImage('duck-1.png');
  fishImage = loadImage('fish.png');
  backImage = loadImage('back.avif');
  redoImage = loadImage('redo.jpeg');
  cloudImage = loadImage('birdie.png');
}

function setup() {  
  createCanvas(600, 400);
  duck = new Duck();
  rains = new Rain();
  textSize(19);
  
  for (let i = 0; i < 500; i++)
    pour.push(new Rain());
}

function startScreen() {
  background('rgb(122,192,228)');
  fill('rgb(56,56,56)');
  text('Welcome to the Duck Game',200,200);
  text('Click to play!',250,230);
  duck.show();
  resetScore();
}

function gameOn() {
  
  image(backImage, -scrollBackground, 0, width,height);
  image(backImage, -scrollBackground + width, 0,width,height);
  
  if (scrollBackground > width) {
    scrollBackground = 0;}
  
  if (frameCount % 5 == 0) {
    counter++;}
  
  if (random(1) < 0.005) {
    fishes.push(new Fish());
  }
  
  if (random(1) < 0.003) {
    clouds.push(new Cloud());
  }
  
  for (let c of clouds) {
    c.move();
    c.show();
    c.animate();
  }
  
  fill('pink');
  text('Score: '+counter,20,40);
  
  duck.show();
  duck.move();
  
  scroll += 0.005;
  scrollBackground += scroll / 5;
  
  rains.draw();
  rains.fall();
  
  for (let f of fishes) {
   
    if(screen !=2) {f.move();}
    f.show();
    
   if(screen != 2 ){
    if (duck.hits(f)) {
     
       screen = 2;
    }
   }
    
  } 
 if(screen==2){
   gameOver()
 } 
  
}

function gameOver() {
  background(100,0,0,100);
  fill('rgb(48,46,46)79)');
  text('Your score was: ' + counter, 220,230);
  fill('rgb(60,59,59)01)');
  text("Game Over ˙◠˙",240,200);
  //text('click to play again', width / 2, height / 2 + 40);
  resetScore();
  noLoop();
  // print(fishes)
  fishes.pop();
  // print(fishes)
  //make duck look sad 
  //image(redoImage,310,215,40,40);
  //var button = createButton('replay');
}

function keyPressed() {
  if (key == ' ') {
    duck.jump();
  }
}

function draw() {
  
  if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	gameOver()
  }	
  print(gameState)
}

function mousePressed(){
	if(screen==0){
  	screen=1
  } else if(screen==2 ){
  	screen=0
    loop();
  }
  
}

 function resetScore(){
	counter=0;
    scollBackground = 0;
    scroll = 10;
}