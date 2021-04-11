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
        if(this.hitboxX===44){
            this.lengthOfEmptyHpBar = 44
        }else if(this.hitboxX===80){
            this.lengthOfEmptyHpBar = 84
        }
        this.c.beginPath();
        this.c.rect(this.x,this.y,this.lengthOfEmptyHpBar,12)
        this.c.fillStyle = "black";
        this.c.fill();

        this.c.beginPath();
        this.c.rect(this.x+1,this.y+1,this.hp,10)
        this.c.fillStyle = "red";
        this.c.fill();

       

    }


}

