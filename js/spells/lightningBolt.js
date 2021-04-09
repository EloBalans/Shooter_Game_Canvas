import { Spell } from "./spell.js";

export class LightningBolt extends Spell{

    constructor(x, y, radius,nr) {

        super(x,y,radius,nr)
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.lightningBolt = document.getElementById("lightningBolt");
        this.lightningBoltHeight = 72;
        this.lightningBoltWidth = 72;
        this.lightningBoltFrameX = 0;
        this.lightningBoltFrameY = 0;
        this.timer = 0
    }

    

    drawLightningBolt(){
       
        
        this.c.drawImage(
            this.lightningBolt,
            this.lightningBoltWidth*this.lightningBoltFrameX,
            this.lightningBoltHeight*this.lightningBoltFrameY,
            this.lightningBoltWidth,
            this.lightningBoltHeight,
            this.x-this.lightningBoltWidth/2,
            this.y-this.lightningBoltHeight-10,
            this.lightningBoltWidth*1.5,
            this.lightningBoltHeight*1.5,
            );
           
            this.timer++;
                if(this.timer===0){
                    this.lightningBoltFrameX =0;
                }else if(this.timer===5){
                    this.lightningBoltFrameX =1;
                }else if(this.timer===10){
                    this.lightningBoltFrameX =2
                }else if(this.timer===15){
                    this.lightningBoltFrameX =3
                }else if(this.timer===20){
                    this.lightningBoltFrameX=4
                }else if(this.timer===25){
                    this.lightningBoltFrameX=5
                }else if(this.timer===30){
                    this.lightningBoltFrameX =6
                }else if(this.timer===35){
                    this.lightningBoltFrameX =7
                }else if(this.timer===40){
                    this.lightningBoltFrameX =8
                }else if(this.timer===45){
                    this.lightningBoltFrameX =9
                }else if(this.timer === 50){
                    this.lightningBoltFrameX =10
                }
            
           
            
    }

    update() {
        this.draw();
        this.drawLightningBolt();
        
    }
}