
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivaltime;
var ground;



function preload(){
  
  
  monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(60,340 ,20, 20)  
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(200, 380, 400, 10);
  ground.velocityX = -4
  
  bananaGroup = new Group();
  obstacleGroup= new Group();
  survivaltime = 0

  
}


function draw() {
  background ("white")
  if (ground.x < 200){
    ground.x = ground.width / 2
  }
 
  if(keyDown("Space")){
    monkey.velocityY = -10
  }
  monkey.velocityY += 0.8
  
  spawnBananas();
  spawnObstacles();
  
  monkey.collide (ground)
  survivaltime = Math.round(getFrameRate()/60)
  text("Survival Time:"+ survivaltime, 160, 20)
  
 
  
  drawSprites();  
}


function spawnBananas(){
  if (frameCount % 120 === 0){
  banana = createSprite(400, 200, 30, 10);
  banana.addImage ("banana", bananaImage);
  banana.scale = 0.06;
  banana.velocityX = -4;
  banana.y = Math.round(random(150, 250));
  banana.lifetime = 100;
  bananaGroup.add(banana);  
  
  } 
}

function spawnObstacles(){
  if(frameCount % 120 === 0){
    obstacle = createSprite(400, 350, 30, 10);
    obstacle.addImage ("obstacle", obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100 ;     
    obstacleGroup.add(obstacle);    
  }
}

