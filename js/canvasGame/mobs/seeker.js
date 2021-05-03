import { Mob } from "./mob.js";

export class Seeker extends Mob {
    constructor(x, y, hp, speed,nr,hitboxX,hitboxY) {
        super(x,y,hp,speed,nr,hitboxX,hitboxY);
       
        this.canvas = document.getElementById('canvas1');
        this.c = this.canvas.getContext('2d');

        this.seeker = document.getElementById("seeker");
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
            this.seeker,
            0,
            this.height*this.frameY,
            this.width,
            this.height,
            this.x-40,
            this.y-22,
            this.width,
            this.height
            );
            this.frameCount++;
            if(this.frameCount===8){
                this.frameCount=0;
                this.frameY++;
            }
            if(this.frameY===5){
                this.frameY=0;
                if(this.hp<60){
                    this.hp=this.hp+5
                } 
                
            }
            
            this.c.restore();
    }

    
    
}