export class Mob {
    constructor(x, y, hp, color, speed) {
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.speed = speed;
        this.color = color;
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.mobSpriteWalk = document.getElementById("myImage");
        this.mobSpriteDead = document.getElementById("myImage2");
        this.mobHeight = 33;
        this.mobWidth = 22;
        this.mobWidthDead = 33;
        this.mobFrameX = 0;
        this.mobFrameXDead = 0;
        
    }
    
    
    draw(){
        

        if(this.hp>0){
            this.drawWalk();
            // this.c.beginPath();
            // this.c.shadowColor="black";
            // this.c.shadowOffsetY=this.radius/2;
            // this.c.shadowBlur=5;
            // this.c.arc(this.x, this.y, this.radius,0, Math.PI * 2,);
            // this.c.fillStyle = "rgba(0,0,0,0.1)";
            // this.c.fill();
            // this.c.shadowColor="black";
            // this.c.shadowOffsetY=0;
            // this.c.shadowBlur=0;
        }else{
            this.hp=0;
            this.drawDeath();
        }
       
        
    }

    hpDraw(){
        this.c.beginPath();
        this.c.rect(this.x-10,this.y-14,44,12)
        this.c.fillStyle = "black";
        this.c.fill();

        this.c.beginPath();
        this.c.rect(this.x-8,this.y-13,this.hp,10)
        this.c.fillStyle = "red";
        this.c.fill();

       

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
            this.mobSpriteWalk,
            this.mobWidth*this.mobFrameX,
            0,
            this.mobWidth,this.mobHeight,
            this.x,
            this.y,
            this.mobWidth*2,
            this.mobHeight*2
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
            this.mobWidthDead*2,
            this.mobHeight*2
            );
            
            if(this.mobFrameXDead<14){
                this.mobFrameXDead += 1;
            }
       
         
        
           
    }    
            
           
   

   
    

   


}

