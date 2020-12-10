//declaring variables - to create space in the comp's memory
var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  //creating rectangle sprite objects
 fixedRect =  createSprite(400,100,50,80);
 movingRect = createSprite(400,800,80,30);
 fixedRect.shapeColor = "yellow";
 movingRect.shapeColor = "yellow";

 movingRect.velocityY = -5;
  fixedRect.velocityY = 5
}

function draw() {
  background(0);   //black - 0; 255 - white

bounceoff(movingRect, fixedRect);
  drawSprites();
}


//define a function to check the collision between any two objects
//object1, object2 - parameters
function bounceoff(object1, object2){
  //Bounce off algorithm along x- axis
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);

    }
      //Bounce off algorithm along y- axis
    if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
    }
  
    
}