
import { Mob } from "./mob.js";

export class Sprout extends Mob {
    constructor(x, y, hp, speed,nr,hitboxX,hitboxY) {
        super(x,y,hp,speed,nr,hitboxX,hitboxY);
       
        this.canvas = document.getElementById('canvas1');
        this.c = this.canvas.getContext('2d');

        this.sprout= document.getElementById("sprout");
        this.height = 96;
        this.width = 96;
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
            this.sprout,
            0,
            this.height*this.frameY,
            this.width,
            this.height,
            this.x-25,
            this.y-25,
            this.width,
            this.height
            );
            this.frameCount++;
            if(this.frameCount===5){
                this.frameCount=0;
                this.frameY++;
            }
            if(this.frameY===5){
                this.frameY=0;
            }
            this.c.restore();
    }

    
    
}