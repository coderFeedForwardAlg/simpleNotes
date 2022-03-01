
let button, button2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);
  button = createButton('download');
  button.position(20,windowHeight - 20);
  button.mousePressed(downLoad);
  
  button2 = createButton('clear');
  button2.position(100,windowHeight - 20);
  button2.mousePressed(clearr);
  
}
let oldX; 
let oldY; 


function draw() {
  //background(220);
  
  if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  
  
  
  
  //noLoop()
    //save("myImage.png");
    
  
 
  
}

function downLoad(){
  save("myImage.png");
}

function clearr(){
  background(255,255,255);
}

