var ball1,ball2;


function setup() {
  createCanvas(800,400);
  ball1 = createSprite(400, 200, 50, 50);
  ball2 = createSprite(200,200,80,40);
  ball1.shapeColor="blue";
  ball2.shapeColor="blue";
}

function draw() {
  background(0);  
  ball1.y=World.mouseY;
  ball1.x=World.mouseX;

if(ball1.x - ball2.x <ball1.width/2+ball2.width/2 && ball2.x - ball1.x <ball2.width/2+ball1.width/2 
&& ball1.y - ball2.y <ball1.height/2+ball2.height/2 &&  ball2.y - ball1.y <ball2.height/2+ball1.height/2




){

 ball1.shapeColor="red";
  ball2.shapeColor="red";

}
else{
   ball1.shapeColor="blue";
  ball2.shapeColor="blue";
}






  drawSprites();
}