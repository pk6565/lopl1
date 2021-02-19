
var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  
 
  movingRect = createSprite(100, 400, 50, 50);
  movingRect.shapeColor = "green";
movingRect.velocityX = 4
  fixedRect = createSprite(800, 400,80,30);
  fixedRect.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  
 
 

bounceOff(fixedRect,movingRect)
  drawSprites();
}

