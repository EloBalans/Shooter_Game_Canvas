export class Buff {
    constructor(x, y, radius) {

        this.x = x;
        this.y = y;
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
        this.c.arc(this.x,this.y,this.radius,0,Math.PI*2)
        this.c.fillStyle = "rgba(255, 255, 255, 0.00001)";
        this.c.fill();
      
    }

    drawPotion(){
        this.c.drawImage(
            this.potion,
            this.potionWidth*this.potionFrameX,
            this.potionHeight*this.potionFrameY,
            this.potionWidth,
            this.potionHeight,
            this.x-this.potionWidth/2,
            this.y-this.potionHeight/2,
            this.potionWidth*1.5,
            this.potionHeight*1.5,
            );
    }

    update() {
        this.draw();
        this.drawPotion();
        
    }
    

   

}