class Polygon{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:1.0,
            friction:0.9,
            density:0.9
        }
        
        this.radius = radius
        this.x = x
        this.y = y
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(this.x,this.y,(this.radius)/2,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
       push();
       
        translate(pos.x,pos.y);
        rectMode(CENTER)
        strokeWeight(3)
        fill("purple")
        image(this.image,0,0,50,50);
        pop();
        
        
              }
}