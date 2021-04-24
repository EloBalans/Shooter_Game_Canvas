
import { Mob } from "./mob.js";

export class Skeleton extends Mob {
    constructor(x, y, hp, speed,nr,hitboxX,hitboxY) {
        super(x,y,hp,speed,nr,hitboxX,hitboxY);
       
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.skeleton = document.getElementById("myImage");
        this.height = 33;
        this.width = 22;
        this.frameX = 0;
        this.frameCount = 0;

    }
    


    update(){
        this.draw();
        this.hpDraw();
  
        if(this.hp>0){
            this.x = this.x +(this.speed.x/this.hp*20);
            this.y = this.y +(this.speed.y/this.hp*20);
        }
    }

    draw(){
        
        if(this.hp>0){
            this.drawWalk();
        }
       
        
    }


    drawWalk(){
        this.c.drawImage(
            this.skeleton,
            this.width*this.frameX,
            0,
            this.width,this.height,
            this.x,
            this.y,
            this.width,
            this.height
            );
            
            this.frameCount++;
            if(this.frameCount===4*(this.hp/40)){
                this.frameCount=0;
                this.frameX++;
            }
            if(this.frameX===13){
                this.frameX=0;
            }
    }

   
}