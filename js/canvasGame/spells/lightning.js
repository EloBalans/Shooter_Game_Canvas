import { Spell } from "./spell.js";

export class Lightning extends Spell{

    constructor(x, y, radius,nr,angle,direction) {

        super(x,y,radius,nr)
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.lightning = document.getElementById("lightning");
        this.lightningHeight = 72;
        this.lightningWidth = 72;
        this.lightningFrameX = 0;
        this.lightningFrameY = 0;
        this.timer = 25
        this.angle = angle-0.06;
        this.direction = direction;
    }

    

    drawLightning(){
      

        this.c.save()
        this.c.translate( this.x+10,this.y+10 )
        this.c.rotate(this.angle);

        this.c.drawImage(
            this.lightning,
            this.lightningWidth*this.lightningFrameX,
            this.lightningHeight*this.lightningFrameY,
            this.lightningWidth,
            this.lightningHeight,
            -this.lightningWidth+70,
            -this.lightningHeight+30,
            this.lightningWidth,
            this.lightningHeight,
            );
            this.c.restore()
             this.timer++;
                if(this.timer===0){
                    this.lightningFrameX =0;
                }else if(this.timer===5){
                    this.lightningFrameX =1;
                }else if(this.timer===10){
                    this.lightningFrameX =2
                }else if(this.timer===15){
                    this.lightningFrameX =3
                }else if(this.timer===20){
                    this.lightningFrameX=4
                }else if(this.timer===25){
                    this.lightningFrameX=5
                    if(this.timer===25){
                        drawHitbox();
                        console.log(this.timer)
                    }
                }else if(this.timer===30){
                    this.lightningFrameX =6
                }else if(this.timer===35){
                    this.lightningFrameX =7

                }else if(this.timer===40){
                    this.lightningBoltFrameX =8
                }else if(this.timer===45){
                    this.lightningFrameX =9
                }else if(this.timer === 50){
                    this.lightningFrameX =10
                }
            
           
            
    }
    drawHitbox(){
        this.draw(this.x+this.direction.x*110,this.y+this.direction.y*110);
        this.draw(this.x+this.direction.x*60,this.y+this.direction.y*60);
    }

    update() {
        
       
        this.drawLightning();
        
    }
}