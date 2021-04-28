import { Spell } from "./spell.js";

export class LightningBolt extends Spell{

    constructor(x, y, radius,nr) {

        super(x,y,radius,nr)
        this.canvas = document.getElementById('canvas1');
        this.c = this.canvas.getContext('2d');
        this.lightningBolt = document.getElementById("lightningBolt");
        this.height = 72;
        this.width = 72;
        this.frameX = 0;
        this.frameY = 0;
        this.timer = 0
        this.locked = true;
    }

    

    drawLightningBolt(){
       
        
        this.c.drawImage(
            this.lightningBolt,
            this.width*this.frameX,
            this.height*this.frameY,
            this.width,
            this.height,
            this.x-this.width/4,
            this.y-this.height+20,
            this.width,
            this.height,
            );
           
            this.timer++;
                if(this.timer===0){
                    this.frameX =0;
                }else if(this.timer===5){
                    this.frameX =1;
                }else if(this.timer===10){
                    this.frameX =2
                }else if(this.timer===15){
                    this.frameX =3
                }else if(this.timer===20){
                    this.frameX=4
                }else if(this.timer===25){
                    this.frameX=5
                }else if(this.timer===30){
                    this.frameX =6
                }else if(this.timer===35){
                    this.frameX =7
                }else if(this.timer===40){
                    this.frameX =8
                }else if(this.timer===45){
                    this.frameX =9
                }else if(this.timer === 50){
                    this.frameX =10
                }
            
                
            
    }
    
    drawHitbox(){
        this.draw(this.x,this.y);
    }
        

    update() {
        this.drawLightningBolt();
        // this.drawHitbox();
    }
}