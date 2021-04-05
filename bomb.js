export class Bomb {
    constructor(x, y, radius,color) {

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
    }

    draw(){
        this.c.beginPath();
        this.c.shadowColor="black";
        this.c.shadowOffsetY=this.radius/2;
        this.c.shadowBlur=2;
        this.c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        this.c.fillStyle = this.color;
        this.c.fill();
        this.c.shadowColor="black";
        this.c.shadowOffsetY=0;
        this.c.shadowBlur=0;
    }
  

   

}