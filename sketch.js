const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Mouse = Matter.Mouse
const Constraint = Matter.Constraint

const MouseConstraint = Matter.MouseConstraint


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  var options = {
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulam1 = new Pendulam(260,350,"blue")
  pendulam2 = new Pendulam(320,350,"pink")
  pendulam3 = new Pendulam(380,350,"yellow")
  pendulam4 = new Pendulam(440,350,"green")
  pendulam5 = new Pendulam(500,350,"red")

  sling1 = new Sling(pendulam1.body,{x:260,y:50})
  sling2 = new Sling(pendulam2.body,{x:320,y:50})
  sling3 = new Sling(pendulam3.body,{x:380,y:50})
  sling4 = new Sling(pendulam4.body,{x:440,y:50})
  sling5 = new Sling(pendulam5.body,{x:500,y:50})
  }

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  pendulam1.display();
  pendulam2.display();
  pendulam3.display();
  pendulam4.display();
  pendulam5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
}