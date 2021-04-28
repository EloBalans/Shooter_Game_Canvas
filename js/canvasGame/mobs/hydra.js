import { Mob } from "./mob.js";

export class Hydra extends Mob {
    constructor(x, y, hp, speed,nr,hitboxX,hitboxY) {
        super(x,y,hp,speed,nr,hitboxX,hitboxY);
       
        this.canvas = document.getElementById('canvas1');
        this.c = this.canvas.getContext('2d');

        this.hydraWalk = document.getElementById("hydraWalk");
        this.height = 910;
        this.width = 1050;
        this.frameX = 0;
        this.frameCount = 0;
 
    }
    
    
    

    update(){
        this.draw();
        this.hpDraw();
        if(this.hp>0){
            this.x = this.x +(this.speed.x/5);
            this.y = this.y +(this.speed.y/5);
        }
        
    }

    draw(){
        this.c.save();
        this.c.scale(-1,1);
        this.c.drawImage(
            this.hydraWalk,
            this.width*this.frameX,
            0,
            this.width,
            this.height,
            -this.x-250,
            this.y-100,
            this.width/3,
            this.height/3
            );
            this.frameCount++;
            if(this.frameCount===7){
                this.frameCount=0;
                this.frameX++;
            }
            if(this.frameX===8){
                this.frameX=0;
            }
            this.c.restore();
    }

    
}