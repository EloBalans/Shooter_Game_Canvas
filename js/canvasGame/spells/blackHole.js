import { Spell } from "./spell.js";

export class BlackHole extends Spell{

    constructor(x, y, radius,nr) {

        super(x,y,radius,nr)
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.blackHole = document.getElementById("blackHole");
        this.height = 72;
        this.width = 72;
        this.frameX = 0;
        this.frameY = 0;
        this.timer = 0
    }

    

    drawBlackHole(){
       
        
        this.c.drawImage(
            this.blackHole,
            this.width*this.frameX,
            this.height*this.frameY,
            this.width,
            this.height,
            this.x-this.width/2+30,
            this.y-this.height/2+30,
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
                    this.timer = 0;
                }
               
            
                
            
    }
    
    drawHitbox(){
        this.draw(this.x,this.y);
    }
        

    update() {
        this.drawBlackHole();
        // this.drawHitbox()
    }
}