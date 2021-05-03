import { Mob } from "./mob.js";

export class Worm extends Mob {
    constructor(x, y, hp, speed,nr,hitboxX,hitboxY) {
        super(x,y,hp,speed,nr,hitboxX,hitboxY);
       
        this.canvas = document.getElementById('canvas1');
        this.c = this.canvas.getContext('2d');

        this.worm = document.getElementById("worm");
        this.height = 90;
        this.width = 90;
        this.frameX = 0;
        this.frameCount = 0;
    }
    



    update(){
        this.draw();
        this.hpDraw();
        if(this.hp>0){
            this.x = this.x +this.speed.x;
            this.y = this.y +this.speed.y;
        }
    }

    draw(){
        this.c.save();
        this.c.drawImage(
            this.worm,
            this.width*this.frameX,
            0,
            this.width,
            this.height,
            this.x-20,
            this.y-25,
            this.width,
            this.height
            );
            
           
            this.frameCount++;
            if(this.frameCount===5){
                this.frameCount=0;
                this.frameX++;
            }
            if(this.frameX===9){
                this.frameX=0;
            }
            this.c.restore();
    }

    
}