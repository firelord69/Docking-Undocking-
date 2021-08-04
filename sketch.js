function preload(){
  issimg = loadImage("no-nitro.png");
  iss1 = loadImage("1-sided-nitro.png");
  iss2 = loadImage("2nd-sided-nitro.png");
  issfull = loadImage("iss.png");

  petrolimg = loadImage("petrol.png")

  bg = loadImage("bg.jpeg");

}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 150, 50, 50);
  iss.addImage(petrolimg);

  iss.debug = true;
  iss.setCollider("Rectangle",0,0,69,69)

  spaceship = createSprite(350,300);
  spaceship.addImage(issimg);
  spaceship.scale = 0.25;

  spaceship.debug = true;
}

function draw() {
  background(bg);  



  if(keyDown("RIGHT_ARROW")){
    spaceship.x = spaceship.x+1;
    spaceship.addImage(iss1);
  }

  if(keyDown("LEFT_ARROW")){
    spaceship.x = spaceship.x-1;
    spaceship.addImage(iss2);
  }

  if(keyDown("UP_ARROW")){
    spaceship.y = spaceship.y-1;
    spaceship.addImage(issfull);
  }

  if(keyDown("DOWN_ARROW")){
    spaceship.y = spaceship.y+1;
    spaceship.addImage(issimg);
  }

  if(iss.isTouching(spaceship)){
    textSize(18);
    text("Docking Succesfull",200,30)
  }


  drawSprites();
}