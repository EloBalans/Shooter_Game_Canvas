
import { Mob } from "./mob.js";

export class Blob extends Mob {
    constructor(x, y, hp, color, speed,nr,hitboxX,hitboxY,random) {
        super(x,y,hp,color,speed,nr,hitboxX,hitboxY,random);
       
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.blob1 = document.getElementById("blob1");
        this.blob2 = document.getElementById("blob2");
        this.blob3 = document.getElementById("blob3");
        this.blob=[this.blob1,  this.blob2,  this.blob3]
        this.random = random;
        this.height = 41;
        this.width = 64;
        this.frameX = 0;
        this.frameY = 0;
        this.frameCount = 0;
        
    }
    
    
    draw(){
        
        if(this.hp>0){
            this.drawWalk();
        }else{
            this.hp=0;
            this.drawDeath();
        }
       
        
    }


    update(){
        this.draw();
        this.hpDraw();
  
        if(this.hp>0){
            this.x = this.x +(this.speed.x);
            this.y = this.y +(this.speed.y);
        }
    }

    drawWalk(){
        this.c.drawImage(
            this.blob[this.random],
            this.width*this.frameX,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
            );
            
            this.frameCount++;
            if(this.frameCount===7){
                this.frameCount=0;
                this.frameX++;
            }
            if(this.frameX===17){
                this.frameX=0;
            }

            
    }

  
     
}