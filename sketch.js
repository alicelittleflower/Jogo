var ball ;
function setup() {
  createCanvas(400,400);
ball = createSprite (200,200, 9, 9);
}

function draw() 
{
  background("pink");
if (keyIsDown(UP_ARROW)){
  ball.y=ball.y-2;
}

  drawSprites ();
}




