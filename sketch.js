var wall,thickness;
var bullet,speed,weight;

function setup(){
var canvas = createCanvas(1600,400);
thickness = random(22,83)
wall = createSprite(1200,200,thickness,height/2)
bullet = createSprite(50,200,20,10);
speed= random(223,321)
weight = random(30,52)
bullet.velocityX = speed/50
bullet.velocityY = 0

}


function draw(){
background("white")

if (hasCollided(bullet,wall)){

Damage_Check()
bullet.velocityX = 0
}

drawSprites();
}