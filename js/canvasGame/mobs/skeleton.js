
import { Mob } from "./mob.js";

export class Skeleton extends Mob {
    constructor(x, y, hp, speed,nr,hitboxX,hitboxY) {
        super(x,y,hp,speed,nr,hitboxX,hitboxY);
       
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.mobSpriteWalk = document.getElementById("myImage");
        this.mobSpriteDead = document.getElementById("myImage2");
        this.height = 33;
        this.width = 22;


        this.mobWidthDead = 33;
        this.mobFrameX = 0;
        this.mobFrameXDead = 0;
        
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
            this.x = this.x +(this.speed.x/this.hp*20);
            this.y = this.y +(this.speed.y/this.hp*20);
        }
    }

    drawWalk(){
        this.c.drawImage(
            this.mobSpriteWalk,
            this.width*this.mobFrameX,
            0,
            this.width,this.height,
            this.x,
            this.y,
            this.width,
            this.height
            );
            
                this.mobFrameX += 1;
        
            if( this.mobFrameX===13){
                this.mobFrameX =0;
            }
    }

    drawDeath(){
        this.c.drawImage(
            this.mobSpriteDead,
            this.mobWidthDead*this.mobFrameXDead,
            0,
            this.mobWidthDead,
            this.mobHeight,
            this.x,
            this.y,
            this.mobWidthDead,
            this.mobHeight
            );
            
            if(this.mobFrameXDead<14){

                this.mobFrameXDead += 1;
            }
    }    
}