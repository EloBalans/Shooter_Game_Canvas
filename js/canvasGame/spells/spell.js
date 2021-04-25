export class Spell {
    constructor(x, y, radius,nr,) {

        this.x = x;
        this.y = y;
        this.nr = nr
        this.radius = radius;
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');

       
    }

    draw(x,y){
      
        this.c.beginPath();
        this.c.arc(x+this.radius/2-1,y+this.radius/2,this.radius,0,Math.PI*2)
        this.c.fillStyle = 'rgba(255, 255, 255, 0.1)';
        this.c.fill();
      
    }



}