var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);
 bullet=createSprite(50,200,50,20)
 thickess=random(22,83);
 weight=random(400,1500);
 wall=createSprite(1500,200,thickness,canvas.height/2)
 fill ("80,80,80")
 speed=random(55,90);
 bullet.velocityX=speed;
 
}

function draw() {
  //background(255,255,255);  
  background("black");
  bullet.collide(wall);
  bullet.collide(wall);
  if(wall.x-bullet.x<(bullet.width+wall.width/2))
  {
    bullet.velocityX=speed;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>100)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation>180 &&deformation<100 )
    {
      bullet.shapeColour=color(230,230,0);
    }
    if(deformation<100){
      bullet.shapeColor=color(0,255,0);
    }
  }
  bullet.collide(wall);
  if(hasCollided(bullet,wall))
  {
    wall.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>12 && damage<43){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<3 && damage>68){
      wall.shapeColor=color(0,255,0)
    }
  }
  
  drawSprites();
  }
function  hasCollided(bullet,wall){
bulletRightEdge=bullet.x-bullet.width;
wallLeftEdge=wall.x
if(bulletRightEdge=wallLeftEdge)
{
return true;
}
return false;
             

}