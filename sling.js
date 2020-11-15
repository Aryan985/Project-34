class Sling{

    constructor(bodyA,pointB){
    var options={
    bodyA : bodyA,
    pointB : pointB,
    stiffness:1,
    angularstiffness:1,
    lengtgh:220
     
    } 
    this.pointB = pointB
    this.sling = Constraint.create(options)
    World.add(world,this.sling)  
    }
    display(){
        if(this.sling.bodyA){
     var pointA = this.sling.bodyA.position;   
     var pointB = this.pointB;
     push() 
     strokeWeight(3)
     stroke("#fff")
     line(pointA.x,pointA.y,pointB.x,pointB.y)
     pop()
        }
    }
}