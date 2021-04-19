export class Buff {
    constructor(x, y, radius,nr) {

        this.x = x;
        this.y = y;
        this.nr = nr
        this.radius = radius;
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
    }

    draw(){
      
        this.c.beginPath();
        this.c.arc(this.x+this.radius/2-5,this.y+this.radius/2-4,this.radius,0,Math.PI*2)
        this.c.fillStyle = "rgba(255, 255, 255, 0.00001)";
        this.c.fill();
      
    }

}