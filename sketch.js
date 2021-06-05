var starImg,bgImg;
var star, starBody;
var fairy;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

	fairy = createSprite(135,520);
	fairy.addAnimation("fairyflying",fairyImg);
    fairy.scale = 0.25


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  if(keyWentDown(RIGHT_ARROW))
  {fairy.x=fairy.x+15}

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(keyCode = DOWN_ARROW){
	  Matter.Body.setStatic(starBody,false);
  }
 if(star.y > 470 && starBody.position.y > 470){
	 Matter.Body.setStatic(starBody,true);
 }
 
  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
