class Canon{
    constructor(x, y, width, heigth, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.canonImage = loadImage("assets/canon.png");
        this.canonBase = loadImage("assets/cannonBase.png");

    }
    
    display(){
        if(keyIsDown(RIGHT_ARROW)&&this.angle<70){
           this.angle+=1;
        }
        if(keyIsDown(LEFT_ARROW)&&this.angle>30){
           this.angle-=1
        }
        //Codigo para crear la parte superior del cañon.
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.canonImage, 0, 0, this.x, this.y, this.width, this.heihgt);
        pop();
        //Codigo para crear la parte inferior del cañon.
        image(this.canonBase, 70, 20, 200, 200);
        noFill();
    }
    
}