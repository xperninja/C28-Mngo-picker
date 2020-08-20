
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

var tree, treeImg, boy, boyImg;

function preload()
{
 treeImg = loadImage("tree.png");
 boyImg = loadImage("boy.png");
}

function setup()
 {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    tree = createSprite(750,400,20,20);
	tree.addImage(treeImg);
	tree.scale = 0.4;

    boy = createSprite(200,525,20,20);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	
	ground = new Ground(500,590,1000,20);
	stone = new Stone(200,200,70);
	string = new Slingshot(stone.body,{x:145, y:470});
	mango1 = new Mango(700,300,60);
	mango2 = new Mango(760,250,60);
	mango3 = new Mango(800,390,60);
	mango4 = new Mango(675,400,60);
	mango5 = new Mango(900,400,60);
	mango6 = new Mango(870,300,60);
	mango7 = new Mango(550,350,60);
	mango8 = new Mango(800,200,60);
	
	
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("grey");

  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  string.display();
  ground.display();
  stone.display();  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
}


function mouseDragged()
{
 Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
 string.fly();
}

function detectCollision(lstone, lmango)
{
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
	  Matter.Body.setStatic(lmango.body, false);
  }

}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		string.attach(stone.body);
	}
}