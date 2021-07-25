var track, trackImage, boy, boyImage, leftWall, rightWall
function preload(){
  //pre-load images
  trackImage = loadImage("path.png");
  boyImage = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  boy = createSprite(248,348);
  leftWall = createSprite(0,0,100,800);
  leftWall.visible = false;
  rightWall = createSprite(410,0,100,800);
  rightWall.visible = false;
  boy.addAnimation("running boy", boyImage);
  track.addImage(trackImage);
  boy.scale = 0.1
  track.velocityY = 4;
  track.scale = 1.2
}

function draw() {
  background(0);
  drawSprites();
  console.log(track.y);
  if(track.y>400){
    track.y = height / 2;
  }
  boy.x = World.mouseX;
  createEdgeSprites();
  boy.collide(leftWall);
  boy.collide(rightWall);
}
