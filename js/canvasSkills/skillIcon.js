export class SkillIcon {
    constructor(nr,x, y, width,heigth,skill,keyboardPosX,keyboardPosY) {
        this.canvas = document.getElementById('canvas2');
        this.c = this.canvas.getContext('2d');
        this.keyboard = document.getElementById("keyboard")
        this.mouse = document.getElementById("mouse")
        this.button = document.getElementById("button")
        this.nr = nr;
        this.x = x;
        this.y = y;
        this.width = width
        this.heigth = heigth
        this.skill = skill  
        this.locked = true;
        this.cooldown = false;
        this.cooldownTime = 1;
        this.keyboardPosX = keyboardPosX
        this.keyboardPosY = keyboardPosY
        
    }

    draw(){
        
        this.drawBorder()
        this.drawIcon()
        if(this.nr ===1){
            this.drawMouse()
        }else{
            this.drawKey()
        }
        if(this.locked ===true){
            this.drawLocked()
        }
        
        
      
    }
    drawBorder(){
        this.c.drawImage(
            this.button,
            985,
            500,
            240,
            240,
            this.x+2,
            this.y,
            64,
            64,
            );
    }


    drawIcon(){
        this.c.save();
        this.c.beginPath();
        this.c.arc(this.x+32, this.y+30, 21 ,0, Math.PI * 2,);
        this.c.closePath();
        this.c.clip();
    
       
        this.c.drawImage(
            this.skill,
            
            this.x+5,
            this.y+3,
            this.width+15,
            this.heigth+15,
            );
        

        this.c.beginPath();
        this.c.arc(0, 0, 21,0, Math.PI * 2,);
        this.c.clip();
        this.c.closePath();
        this.c.restore();

        if(this.cooldown===true){
            this.c.save();
            this.c.beginPath();
            this.c.arc(this.x+32, this.y+30, 21 ,0, Math.PI *2);
            this.c.fillStyle = 'rgba(0, 0, 255,0.8)';
            this.c.fill();
            this.c.closePath();
            this.c.restore();

            this.c.textAlign = "center";
            this.c.fillStyle = "white"
            this.c.font = "30px";
            this.c.fillText(this.cooldownTime,this.x+32,this.y+32);
        }
        
        
    }


    
    drawLocked(){
        this.c.drawImage(
            this.button,
            1250,
            500,
            240,
            240,
            this.x+21,
            this.y+18,
            24,
            24,
            );
    }

    
    drawMouse(){
        this.c.drawImage(
            this.mouse,
            this.x+16,
            this.y+64,
            this.width-10    ,
            this.heigth-10,
        )
    }

    drawKey(){
        this.c.drawImage(
            this.keyboard, 
            this.keyboardPosX,  
            this.keyboardPosY, 
            112.5,
            112.5, 
            this.x+12, 
            this.y+54 ,
            this.width,
            this.heigth
        )
    }

    update(){
        this.draw();
        
    }
    

}