class Roof {

    constructor(x, y, width, height){
    
        var options = {
            'isStatic': true
        }
    
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
    
        World.add(world, this.body)
    
    }
        display(){
            var pos = this.body.position
            rectMode(CENTER);
            fill("gray");
            rect(pos.x - 200, pos.y - 500, this.width - 800, this.height);
    }
    }