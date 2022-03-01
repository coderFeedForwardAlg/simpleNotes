function setup() {
  createCanvas(windowWidth, windowHeight);
  
}
let oldX; 
let oldY; 


function draw() {
  //background(220);
  
  if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
 
  
}

