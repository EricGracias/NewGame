var PLAY = 1;
var END = 0;
var gameState = PLAY;

var forest,forestImage,monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground,groundImage,s,sImage;
var score;
var bananas;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
   
 bananaImage = loadImage("banana.png");
 obstacleImage=loadAnimation("p.png","p.png","pl.png","pl.png","pl.png","pl.png");
  forestImage = loadImage("jungle.png");
  groundImage = loadImage("ground.png");
  sImage = loadImage("silverback1.png");
}

function setup() {
 createCanvas(400,400);
 forest = createSprite(-20,200);
 forest.addImage("for",forestImage);
 forest.scale=2.3;
 monkey = createSprite(40,250,20,50);
 monkey.addAnimation("monkey",monkey_running);
 monkey.scale=0.1;
 ground = createSprite(200,300);
 ground.addImage("g",groundImage);
 ground.scale=2.3;
 score=0;
 bananas=0;
  
 FoodGroup = new Group();
 obstacleGroup = new Group();
 Silver = new Group();
}


function draw() {
 background("white");
 forest.velocityX=-10;
 ground.velocityX=-13;
 monkey.collide(ground);
  
  if(gameState === PLAY){
    
    if (forest.x <0){
  forest.x = forest.width/1.7;
    }
  
    }
   else if (gameState === END) {
  
   }
    
   Obstacles();
   Bananas();
   Silverback();
 if (ground.x <0){
  ground.x = ground.width/1.7;
    }
  
 if(keyDown("space")&& monkey.y >= 250) {
    monkey.velocityY =-15;
  }
 monkey.velocityY = monkey.velocityY + 0.8

  if(FoodGroup.isTouching(monkey)){
    bananas=bananas+1;
    FoodGroup.destroyEach();
    }
  drawSprites();
  
  textSize(30);
  text("score:"+ score,40,30);
  score = score+Math.round(getFrameRate()/60);
  textSize(20);
  text("bananas:"+ bananas,40,60);

  
}
 function Obstacles(){
   if (frameCount % 200 === 0){   
    obstacle = createSprite(1500,250);
    obstacle.velocityX=-12;
    obstacle.addAnimation("d",obstacleImage);
    obstacle.scale=0.04;
    obstacle.lifetime = 600;
    obstacleGroup.add(obstacle);  
  }
 }
 function Bananas(){
  if (frameCount % 60 === 0){           
    banana = createSprite(450,130);
    banana.velocityX=-6;
    banana.addImage("b",bananaImage);
    banana.scale=0.1;
    banana.lifetime = 100;
    FoodGroup.add(banana);
 }
 }
function Silverback(){
   if (frameCount % 150 === 0){   
    ob = createSprite(1000,250);
    ob.velocityX=-12;
    ob.addImage("d",sImage);
    ob.scale=0.2;
    ob.lifetime = 300;
    Silver.add(ob);  
  }
 }