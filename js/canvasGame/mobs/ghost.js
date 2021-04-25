
import { Mob } from "./mob.js";

export class Ghost extends Mob {
    constructor(x, y, hp, speed,nr,hitboxX,hitboxY) {
        super(x,y,hp,speed,nr,hitboxX,hitboxY);
       
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');

        this.ghost = document.getElementById("ghost");
        this.height = 80;
        this.width = 64;
        this.frameX = 0;
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
            this.ghost,
            this.width*this.frameX,
            0,
            this.width,
            this.height,
            -this.x-45,
            this.y-20,
            this.width,
            this.height
            );
            this.frameCount++;
            if(this.frameCount===5){
                this.frameCount=0;
                this.frameX++;
            }
            if(this.frameX==6){
                this.frameX=0;
            }
            this.c.restore();
    }

    
}