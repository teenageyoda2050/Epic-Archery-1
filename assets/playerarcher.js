class PlayerArcher{
    constructor(x, y, width, height){
        var options = {isStatic: true}
        this.body = Matter.Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        this.collapse = false;
        this.image = loadImage("./assests/playerarcher.png")
        World.add(world, this.body)
        Matter.Body.setAngle(this.body, -90)

    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle);
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height)
        pop();
        
    }
}  

