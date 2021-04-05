export class Particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = velocity;
        this.color = color;
        this.alpha = 1;
        this.slow = 0.99;
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        
    
    }

    draw(){
        this.c.save();
        this.c.globalAlpha = this.alpha;
        this.c.beginPath();
        this.c.shadowColor="black";
        this.c.shadowOffsetY=0;
        this.c.shadowBlur=1;
        this.c.arc(this.x, this.y, this.radius,0, Math.PI * 2,);
        this.c.fillStyle = this.color;
        this.c.fill();
        this.c.restore();

        
    }
  

    update(){
       this.draw();
       this.velocity.x *=this.slow;
       this.velocity.y *=this.slow;
       this.x = this.x +this.velocity.x*2;
       this.y = this.y +this.velocity.y*2;
       this.alpha -=0.01
    }


}

