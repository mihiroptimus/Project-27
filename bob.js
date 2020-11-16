class Bob {

    constructor(x, y){

        var options = {
            'friction': 10

        }

        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 35;

        World.add(world, this.body)

    }

    display(){

        var pos = this.body.position
        //var angle = this.body.angle
        //push();
        //translate(pos.x, pos.y)
        ellipseMode(RADIUS)
        //rotate(angle)
        fill("pink")
        ellipse(pos.x - 200, pos.y - 250, this.radius, this.radius);
        //pop()

    }
        

}