class SlingShot{
    constructor(x,y,body){

        const options ={
            pointA:{x:x,y:y},
            bodyB: body,
            stiffness: 0.04,
            length: 1
            }
            this.pointA = {x:x,y:y}
            this.bodyB = body
                
            
            this.sling = Constraint.create(options);
            World.add(world,this.sling)
        }

        fly(){
            this.sling.bodyB = null;
        }

        display(){
            if(this.sling.bodyB){
            stroke(255);
             var posA = this.pointA;
            var posB = this.sling.bodyB.position;
            line(posA.x, posA.y, posB.x, posB.y)
        }
    }

}