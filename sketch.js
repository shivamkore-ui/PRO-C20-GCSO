var car, wall;
var speed, weight;

function setup() {
  createCanvas(900, 250);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 125, 50, 50);
  car.velocityX = speed;

  wall = createSprite(880, 125, 20, 150);
  wall.shapeColor = color(80, 80, 80);

}

function draw() {
  background(0, 0, 0);
  
  if(wall.x - car.x < wall.width/2 + car.width/2 ){
     
     
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    
    if(deformation > 180){
      
      car.shapeColor = color(255, 0, 0);
}
    if(deformation < 180 && deformation > 100){
      
      car.shapeColor = color(230, 230, 0);
}
    if(deformation < 100){
            
      car.shapeColor = color(255, 0, 0);
}
    
}
  
  
  drawSprites();
}