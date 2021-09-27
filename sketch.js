/*
Crie uma classe papel, com:
- um corpo matter.js circular
- densidade 1.2
- imagem de papel amassado - para isso, usar a função image() dentro do display()
*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	// crie o objeto da classe papel
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
	//mostre o objeto da classe papel
  groundObject.display();
  dustbinObj.display();

}

/*
Quando a seta para cima for apertada, aplique forças ao papel para que ele caia na lixeira
Para aplicar as forças, utilize o seguinte código:
Body.applyForce(papel.body,papel.body.position,{x:130,y:-145});
ajuste x e y caso o seu papel não caia na lixeira
*/