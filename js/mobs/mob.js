export class Mob {
    constructor(x, y, hp, color, speed,nr) {
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.speed = speed;
        this.color = color;
        this.nr=nr;
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


}

