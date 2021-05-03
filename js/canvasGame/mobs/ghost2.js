
import { Mob } from "./mob.js";

export class Ghost2 extends Mob {
    constructor(x, y, hp, speed,nr,hitboxX,hitboxY) {
        super(x,y,hp,speed,nr,hitboxX,hitboxY);
       
        this.canvas = document.getElementById('canvas1');
        this.c = this.canvas.getContext('2d');

        this.ghost2 = document.getElementById("ghost2");
        this.height = 100;
        this.width = 100;
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
        this.hitbox();
        this.c.save();
        this.c.drawImage(
            this.ghost2,
            this.width*this.frameX,
            this.height*this.frameY,
            this.width,
            this.height,
            this.x-35,
            this.y-20,
            this.width,
            this.height
            );
            this.frameCount++;
            if(this.frameCount===5){
                this.frameCount=0;
                this.frameX++;
            }
            if(this.frameX===4){
                this.frameX=0;
                this.frameY++;
            }
            if(this.frameY === 2){
                this.frameY=0;
            }
            this.c.restore();
    }

   
}