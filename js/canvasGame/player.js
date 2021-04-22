export class Player{
    constructor(x, y, radius,speed,ammo,bomb,hp,points,hptower) {
        this.x = x ;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.ammo = ammo;
        this.bomb = bomb;
        this.hp=hp;
        this.hptower = hptower;
        this.points = points;
        this.keys = {};
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');

        this.mage = document.getElementById("mage");
        this.mageHeight = 64;
        this.mageWidth = 64;
        this.mageFrameX = 0;
        this.mageFrameY = 0;
        this.timer = 0
        this.walk = -1; // if walk === -1 left direction 
    }   
    
    draw(){
       
        this.c.beginPath();
        this.c.arc(this.x, this.y-this.radius, this.radius,0, Math.PI * 2,);
        this.c.fillStyle = 'rgba(255, 255, 255, 0.00001)';
        this.c.fill();
        this.movement();
        this.drawWalkMage();
        // this.drawIdleMage();
        
    }   

    drawWalkMage(){
        this.c.save();
        if(this.walk===-1){
            this.c.scale(-1,1);
        }
        
        this.c.drawImage(
            this.mage,
            this.mageWidth*this.mageFrameX,
            this.mageHeight*(this.mageFrameY+2),
            this.mageWidth,this.mageHeight,
            (this.walk*this.x)-this.mageWidth/2,
            this.y-this.mageHeight,
            this.mageWidth,
            this.mageHeight
            );

            this.timer++;
                if(this.timer===0){
                    this.mageFrameX =0;
                }else if(this.timer===7){
                    this.mageFrameX =1;
                }else if(this.timer===14){
                    this.mageFrameX =2
                }else if(this.timer===21){
                    this.mageFrameX =3
                }else if(this.timer===28){
                    this.mageFrameX =4
                }else if(this.timer===35){
                    this.mageFrameX =5
                }else if(this.timer===42){
                    this.mageFrameX =6
                    this.timer= 0
                }
        this.c.restore();
    }

    drawIdleMage(){
        if(this.walk===-1){
            this.c.scale(-1,1);
        }
        
        this.c.drawImage(
            this.mage,
            this.mageWidth*this.mageFrameX,
            this.mageHeight*(this.mageFrameY+0),
            this.mageWidth,this.mageHeight,
            (this.walk*this.x)-this.mageWidth,
            this.y-this.mageHeight-48,
            this.mageWidth*2,
            this.mageHeight*2
            );

            this.timer++;
                if(this.timer2===0){
                    this.mageFrameX =0;
                }else if(this.timer===7){
                    this.mageFrameX =1;
                }else if(this.timer===14){
                    this.mageFrameX =2
                }else if(this.timer===21){
                    this.mageFrameX =3
                }else if(this.timer===28){
                    this.mageFrameX =4
                }else if(this.timer===35){
                    this.mageFrameX =5
                }else if(this.timer===42){
                    this.mageFrameX =6
                    this.timer= 0
                }
        
    }

    
    movement(){
        
        
        if (this.keys["w"]&&this.y>75) {
            this.y -= this.speed;   

        } if (this.keys["s"]&&this.y<435) {
            this.y += this.speed;

        } if (this.keys["a"]&&this.x>0+this.radius) {
            this.walk=-1;
            this.x -= this.speed;

        } if (this.keys["d"]&&this.x<640-this.radius) {
            this.walk=1;
            this.x += this.speed;
        }
          
        
    }


    
}

