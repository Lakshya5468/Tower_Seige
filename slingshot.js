class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA.body,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.chain=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.chain);
    }
    display(){
        push();
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB;
        pop();
    }
    fly(){
    this.chain.pointA=null;
    }
    }