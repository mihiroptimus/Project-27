class Rope {
    constructor(bodyX, bodyY, offSetX, offSetY){

        this.offSetX = offSetX
        this.offSetY = offSetY
        var options = {
            bodyA: bodyX,
            bodyB: bodyY,
            length:10
        }

        this.rope = Constraint.create(options)
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        strokeWeight(2);
        stroke("orange");
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }

}