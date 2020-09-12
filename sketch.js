var wall,thickness ; 
var bullet,speed,weight ; 

function setup() {
 var canvas =  createCanvas(1600,400);
 //canvas.shapeColor = color(80,80,80);

 thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,22);

 bullet =  createSprite(50,200,50,50);
 
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color (80,80,80);
}


function draw() {
  background(200,200,200);  

  bullet.velocityX = speed ; 

  if(wall.x-bullet.x <(bullet.weight+wall.weight)/2)
  {
      bullet.velocityX = speed;
      var deformation = 0.5*weight*speed*speed /22509 ; 
      if(deformation > 180 )
      {
        bullet.shapeColor = color(255,0,0);
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        bullet.shapeColor = color(230,230,0);
      }
      if(deformation < 100 ) 
      {
        bullet.shapeColor = color(0,255,0);
      }
    } 


    drawSprites();
}


function hasCollided(Lbullet,Lwall)
{

  bulletRightEdge=Lbullet.x+Lbullet.weight;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true 
  }

  return false;


}



if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness * thickness);

if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor=color(0,225,0);
}
}