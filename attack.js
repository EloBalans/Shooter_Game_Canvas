export class Attack {
    constructor(x, y, radius,color,velocity,speed,angle) {

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = velocity;
        this.color = color;
        this.speed = speed;
        this.angle = angle;
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.fireball = document.getElementById("fireball");
        this.fireballHeight = 32;
        this.fireballWidth = 32;
        this.fireballFrameX = 0;
        this.fireballFrameY = 0;
        
    }

    draw(){
        this.c.shadowColor="black";
        this.c.shadowOffsetY=this.radius/2;
        this.c.shadowBlur=5;
        this.c.beginPath();
        this.c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        this.c.fillStyle = this.color;
        this.c.fill();
        this.c.shadowColor="black";
        this.c.shadowOffsetY=0;
        this.c.shadowBlur=0;
    }

    update() {
        this.draw();
        this.drawFireball()
        
        this.x = this.x +this.velocity.x*this.speed;
        this.y = this.y +this.velocity.y*this.speed;
    }

    drawFireball(){

        this.c.save();
        
        this.c.drawImage(
            this.fireball,
            this.fireballWidth*this.fireballFrameX,
            this.fireballHeight*this.fireballFrameY,
            this.fireballWidth,
            this.fireballHeight,
            this.x-this.fireballWidth/4,
            this.y-this.fireballHeight/4,
            this.fireballWidth/2,
            this.fireballHeight/2,
            );
        
        this.c.restore();

    }

}