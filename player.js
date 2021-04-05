export class Player{
    constructor(x, y, radius, color, speed,ammo,bomb,hp,points,hptower) {
        this.x = x ;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.color = color;
        this.ammo = ammo;
        this.bomb = bomb;
        this.hp=hp;
        this.hptower=hptower;
        this.points=points;
        this.keys = {};
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
    }   
    
    draw(){
        this.c.shadowColor="black";
        this.c.shadowOffsetY=this.radius/2;
        this.c.shadowBlur=5;
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius,0, Math.PI * 2,);
        this.c.fillStyle = this.color;
        this.c.fill();
        this.movement();
        this.c.shadowColor="black";
        this.c.shadowOffsetY=0;
        this.c.shadowBlur=0;
        this.c.fillText("ammo: "+this.ammo, this.x-5, this.y+25);
        this.c.fillText("bombs: "+this.bomb, this.x-5, this.y+35);
        this.c.fillText("points: "+this.points, this.x-5, this.y+45);
        this.c.fillText("hp: "+this.hp, this.x-5, this.y+55);
        this.c.fillText("hp tower: "+this.hptower, this.x-5, this.y+65);
        
    }
    
    movement(){
        
        if (this.keys["w"]&&this.y>75) {
            this.y -= this.speed;
        } if (this.keys["s"]&&this.y<435) {
            this.y += this.speed;
        } if (this.keys["a"]) {
            this.x -= this.speed;
        } if (this.keys["d"]) {
            this.x += this.speed;
        }
    }
    
}

