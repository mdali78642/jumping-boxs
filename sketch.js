    //Defining variable for Canvas.
    var canvas;
    //defining variable for playing music.
    var music;
    //defining variables for all the surfaces.
    var greensur,bluesur,redsur,yellowsur;
    //defining variable for our box.
    var box;
 
    function preload(){
    // preloading our sound to play when needed.
    music = loadSound("music.mp3");
    }

    function setup(){
    canvas = createCanvas(540,550);

 //create 4 different surfaces
 greensur = createSprite(70,540,100,15)
 greensur.shapeColor = "green";
 
 bluesur = createSprite(200,540,100,15)
 bluesur.shapeColor = "blue";

 redsur = createSprite(330,540,100,15)
 redsur.shapeColor = "red";

 yellowsur = createSprite(460,540,100,15)
 yellowsur.shapeColor = "yellow";

 //create box sprite and give velocity
 box = createSprite(random(20,750));
 box.scale = 0.4;
 box.velocityX  = 4;
 box.velocityY  = 4;
 box.shapeColor = "white";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    drawSprites();
    //add condition to check if box touching surface and make it box
  if(box.isTouching(edges)
  && box.bounceOff(edges)){
  }
    
 if(greensur.isTouching(box)
 && box.bounceOff(greensur)){
     box.shapeColor = "green";
 }
 if(bluesur.isTouching(box)){
     //box.collide();
     box.shapeColor = "blue";
     box.velocityX = 0;
     box.velocityY = 0;
     music.stop();
 }
    if(redsur.isTouching(box)
    && box.bounceOff(redsur)){
        box.shapeColor = "red";
    }
    if(yellowsur.isTouching(box)
    && box.bounceOff(yellowsur)){
        box.shapeColor = "yellow";
        music.play();
    }

     }   
    function bounceOff(greensur,bluesur,redsur,yellowsur) {
    if(greensur.x - bluesur.x < greensur.width/2 + bluesur.width/2
    && bluesur.x - greensur.x < greensur.width/2 + bluesur,width/2
    && redsur.x - yellowsur.x < redsur.width/2 + yellowsur.width/2
    && yellowsur.x - redsur.x < redsur.width/2 + yellowsur.width/2) 
    {
    greensur.velocityX = greensur.velocityX * (-1);
    bluesur.velocityX = bluesur.velocityX * (-1);
    redsur.velocityX = redsur.velocityX * (-1);
    yellowsur.velocityX = yellowsur.velocityX * (-1);
    }
    if(greensur.y - bluesur.y < greensur.height/2 + bluesur.height/2
    && bluesur.y - greensur.y < greensur.height/2 + bluesur,height/2
    && redsur.y - yellowsur.y < redsur.height/2 + yellowsur.height/2
    && yellowsur.y - redsur.y < redsur.height/2 + yellowsur.height/2) 
    {
        greensur.velocityY = greensur.velocityX * (-1);
        bluesur.velocityY = bluesur.velocityX * (-1);
        redsur.velocityY = redsur.velocityX * (-1);
        yellowsur.velocityY = yellowsur.velocityX * (-1);
    }
    }