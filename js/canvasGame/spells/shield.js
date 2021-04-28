import { Spell } from "./spell.js";

export class Shield extends Spell{

    constructor(x, y, radius,nr) {

        super(x,y,radius,nr)
        this.canvas = document.getElementById('canvas1');
        this.c = this.canvas.getContext('2d');
        this.shield = document.getElementById("shield");
        this.height = 72;
        this.width = 72;
        this.frameX = 0;
        this.frameY = 0;
        this.timer = 0
    }

    

    drawShield(){
       
        
        this.c.drawImage(
            this.shield,
            this.width*this.frameX,
            this.height*this.frameY,
            this.width,
            this.height,
            this.x-this.width/2+14,
            this.y-this.height/2+16,
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
                    this.timer = -1;
                }
               
            
                
            
    }
    
    drawHitbox(){
       
        this.draw(this.x,this.y);
    }
        

    update() {
        this.drawShield();
        // this.drawHitbox()
    }
}