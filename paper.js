class Paper {
    constructor (x,y){
        var options={
            isStatic : false,
            restitution : 0.04,
            friction : 0.5,
            density : 1.2,
        }
        this.body= Bodies.circle(x, y,70, options);
        this.image=loadImage("paper.png");
        World.add (world,this.body);

}
display(){

var pos=this.body.position;
var angle=this.body.angle;
push();
fill("red");
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image,pos.x,pos.y,70,70);
pop();
}
}