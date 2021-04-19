export class Mob {
    constructor(x, y, hp, color, speed,nr,hitboxX,hitboxY) {
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.speed = speed;
        this.color = color;
        this.nr=nr;
        this.hitboxX= hitboxX
        this.hitboxY = hitboxY
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.lengthOfEmptyHpBar = 0
        
    }
    


    hpDraw(){
        if(this.nr===1){
            //skeleton
            this.lengthOfEmptyHpBar = 44
            this.c.beginPath();
            this.c.rect(this.x-10,this.y-20,this.lengthOfEmptyHpBar,7)
            this.c.fillStyle = "black";
            this.c.fill();
    
            this.c.beginPath();
            this.c.rect(this.x+1-10,this.y+1-20,this.hp,5)
            this.c.fillStyle = "red";
            this.c.fill();
        }else if(this.nr===2){
            //demon
            this.lengthOfEmptyHpBar = 84
            this.c.beginPath();
            this.c.rect(this.x,this.y,this.lengthOfEmptyHpBar,12)
            this.c.fillStyle = "black";
            this.c.fill();
    
            this.c.beginPath();
            this.c.rect(this.x+1,this.y+1,this.hp,10)
            this.c.fillStyle = "red";
            this.c.fill();
        }
        else if(this.nr===4){
            //blob
            this.lengthOfEmptyHpBar = 34
            this.c.beginPath();
            this.c.rect(this.x+14,this.y-10,this.lengthOfEmptyHpBar,7)
            this.c.fillStyle = "black";
            this.c.fill();
    
            this.c.beginPath(); 
            this.c.rect(this.x+1+14,this.y+1-10,this.hp,5)
            this.c.fillStyle = "red";
            this.c.fill();
        }
        
        

       

    }


}

