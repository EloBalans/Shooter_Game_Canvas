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
        this.fireballHeight = 36;
        this.fireballWidth = 72;
        this.fireballFrameX = 0;
        this.fireballFrameY = 1;
        
        
    }

    draw(){
        
        this.c.beginPath();
        this.c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        this.c.fillStyle = 'rgba(255, 255, 255, 0.000001)';
        this.c.fill();
       
    }

    update() {
        this.draw();
        this.drawFireball()
        
        this.x 
           = this.x +this.velocity.x*this.speed;
        this.y  
          =this.y +this.velocity.y*this.speed;
    }

    drawFireball(){
        
        this.c.save()
        
        
        this.c.translate(
             this.x,this.y
           
            )
        this.c.rotate(this.angle);
        this.c.drawImage(
            this.fireball,
            this.fireballWidth*this.fireballFrameX,
            this.fireballHeight*this.fireballFrameY,
            this.fireballWidth,
            this.fireballHeight,
            -this.fireballWidth/4,  
            -this.fireballHeight/4,
            this.fireballWidth/2,
            this.fireballHeight/2,
            );
        

        this.c.restore()

        if(this.fireballFrameX<7){
            this.fireballFrameX++;
        }else{
            this.fireballFrameX=0;
        }
            

    }

}