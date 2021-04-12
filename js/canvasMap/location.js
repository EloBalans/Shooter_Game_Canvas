export class Location {
    constructor(x, y, radius,nr) {
        this.x = x;
        this.y = y;
        this.nr = nr
        this.radius = radius;
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.alpha = 0.7;
    }

    draw(){
        this.c.save();
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius,0, Math.PI * 2,);
        this.c.fillStyle = 'rgba(255, 255, 255,0.7)';
        this.c.strokeStyle = "brown";
        this.c.stroke();
        this.c.fill();
        this.c.restore();
        
    }
  
    isInPath(x,y){
        if(this.c.isPointInPath(x, y)){
            return this.nr;
        }else null;
    }
    update(){
       this.draw();
    }


}

