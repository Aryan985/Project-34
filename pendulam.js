class Pendulam{

    constructor(x,y,color){
    var options={
    restitution :1,
    slop:1,
    inertia:Infinity
    } 
    this.body = Bodies.circle(x,y,20,options) 
    this.x = x
    this.y = y
    this.color = color
    World.add(world,this.body)  
    }
    display(){
     var angle = this.body.angle;   
     var pos = this.body.position;
     push() 
     translate(pos.x,pos.y)  
     rotate(angle);
     fill(this.color)
     ellipseMode(RADIUS)
     ellipse(0,0,20)
     pop()
    }
}