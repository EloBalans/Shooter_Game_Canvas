
import { Mob } from "./mob.js";

export class Demon extends Mob {
    constructor(x, y, hp, speed,nr,hitboxX,hitboxY) {
        super(x,y,hp,speed,nr,hitboxX,hitboxY);
       
        this.canvas = document.getElementById('canvas1');
        this.c = this.canvas.getContext('2d');

        this.demon = document.getElementById("demon");
        this.height = 144;
        this.width = 160;
        this.demonFrameX = 0;
        this.frameCount = 0;
 
    }
    
    
    

    update(){
        this.draw();
        this.hpDraw();
        if(this.hp>0){
            this.x = this.x +(this.speed.x);
            this.y = this.y +(this.speed.y);
        }
        
    }

    draw(){
        this.c.save();
        this.c.scale(-1,1);
        this.c.drawImage(
            this.demon,
            this.width*this.demonFrameX,
            0,
            this.width,
            this.height,
            -this.x-100,
            this.y,
            this.width,
            this.height
            );
            this.frameCount++;
            if(this.frameCount===5){
                this.frameCount=0;
                this.demonFrameX++;
            }
            if(this.demonFrameX==6){
                this.demonFrameX=0;
            }
            this.c.restore();
    }

    
}