var sea,seaImg;
var ship, shipImg1


function preload(){

  seaImg=loadImage("sea.png")
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png")
}



function setup(){
  createCanvas(400,400);

  sea=createSprite(200,200);
  sea.scale=0.3;
  sea.addImage("sea", seaImg)
 
  

  ship=createSprite(160,250,30,30)
  ship.addAnimation("ship",shipImg1)
  ship.scale=0.2;

  
  

}



function draw() {
  background("sea")
 

  sea.velocityX=-2;
 
  if (sea.x<0){
    sea.x = sea.width/2;
  }
  drawSprites()
}