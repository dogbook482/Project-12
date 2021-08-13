var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var appleImg;
var ran;
var red;
var redImg;
var orange;
var orangeImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  redImg=loadImage("redImage.png");
  orangeImg=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  ran=Math.round(random(10,350));
  rand=Math.round(random(20,340));
  rando=Math.round(random(30,330))
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  

   // adding right arrow function
   if (keyDown("right")){
    rabbit.x=rabbit.x+5;
  }

  //adding left arrow function
  if (keyDown("left")){
     rabbit.x=rabbit.x-5;
  }

    var random1= Math.round(random(1,3))

    if(random1==1){
      spawnApples();
    } else if (random1==2){
      spawnOrange();
    } else{
      spawnRed();
    }
    
    drawSprites();
}

function spawnApples(){
  // write your code here 
  if(frameCount%60===0)
  {
  console.log("applesbeginning");
  apple=createSprite(ran,100,40,10);
  apple.scale=0.09;
  apple.addImage(appleImg);
  apple.velocityY=3;
  apple.depth=garden.depth;
 apple.depth=apple.depth+1;
 console.log("applesend");
  }
 }

 function spawnRed(){
  if(frameCount%80===0)
  {
  red=createSprite(rand,100,40,10);
  red.scale=0.05;
  red.addImage(redImg);
  red.velocityY=3;
  red.depth=garden.depth;
 red.depth=red.depth+1;
  }
 }


function spawnOrange(){
  if(frameCount%90===0)
  {
  orange=createSprite(rando,100,40,10);
  orange.scale=0.05;
  orange.addImage(orangeImg);
  orange.velocityY=3;
  orange.depth=garden.depth;
 orange.depth=orange.depth+1;
  }
 }

 