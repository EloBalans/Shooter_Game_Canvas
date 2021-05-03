
import { Mob } from "./mob.js";

export class OldGuardian extends Mob {
    constructor(x, y, hp, speed,nr,hitboxX,hitboxY) {
        super(x,y,hp,speed,nr,hitboxX,hitboxY);
       
        this.canvas = document.getElementById('canvas1');
        this.c = this.canvas.getContext('2d');

        this.oldGuardian = document.getElementById("oldGuardian");
        this.height = 120;
        this.width = 120;
        this.frameX = 0;
        this.frameY = 0;
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
        this.c.drawImage(
            this.oldGuardian,
            0,
            this.height*this.frameY,
            this.width,
            this.height,
            this.x-40,
            this.y-35,
            this.width,
            this.height
            );
            this.frameCount++;
            if(this.frameCount===8){
                this.frameCount=0;
                this.frameY++;
            }
            if(this.frameY===8){
                this.frameY=0;
            }
            
            this.c.restore();
    }

    
    
}