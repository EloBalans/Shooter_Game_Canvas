export class Buff {
    constructor(x, y, radius,nr) {

        this.x = x;
        this.y = y;
        this.nr = nr
        this.radius = radius;
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.potion = document.getElementById("potion");
        this.potionHeight = 16;
        this.potionWidth = 16;
        this.potionFrameX = 2;
        this.potionFrameY = 0;
    }

    draw(){
      
        this.c.beginPath();
        this.c.arc(this.x+this.radius/2-1,this.y+this.radius/2,this.radius,0,Math.PI*2)
        this.c.fillStyle = "rgba(255, 255, 255, 0.000001)";
        this.c.fill();
      
    }

}