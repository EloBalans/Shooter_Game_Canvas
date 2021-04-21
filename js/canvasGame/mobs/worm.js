
import { Mob } from "./mob.js";

export class Worm extends Mob {
    constructor(x, y, hp, speed,nr) {
        super(x,y,hp,speed,nr);
       
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.worm = document.getElementById("worm");
        this.mobHeight = 90;
        this.mobWidth = 90;
        this.mobFrameX = 0;
        
    }
    
    
    draw(){
        
        if(this.hp>0){
            this.drawWalk();
        }else{
            this.hp=0;
           
        }
       
        
    }


    update(){
        this.draw();
        this.hpDraw();
  
        if(this.hp>0){
            this.x = this.x +this.speed.x/this.hp*20;
            this.y = this.y +this.speed.y/this.hp*20;
        }
    }

    drawWalk(){
        this.c.drawImage(
            this.worm,
            this.mobWidth*this.mobFrameX,
            0,
            this.mobWidth,this.mobHeight,
            this.x,
            this.y,
            this.mobWidth*2,
            this.mobHeight*2
            );
            
           
            this.mobFrameX += 1;
            if( this.mobFrameX===9){
                this.mobFrameX=0
            }
    }

    
}