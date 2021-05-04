export class StartGame {
    constructor(animationID,points,highscore,open) {
        this.animationID = animationID;
        this.points = points;
        this.highscore = highscore;
        this.colorButton =  '#Be4b25'
        this.mousePos = {
            x:0,
            y:0,
        }
        this.open = open;
        this.canvas = document.getElementById('canvas1');
        this.c = this.canvas.getContext('2d'); 
        this.bg = document.getElementById("dragonBG");   
        }

        drawStartMenu(){

        cancelAnimationFrame(animationID);
        this.c.drawImage(
            bg,
            700,
            0,
            canvas.width*2,
            canvas.height*2,
            canvas.width/2-150,
            canvas.height/2-100,
            300, 
            200,
            );
        
        this.c.save()
        this.c.font = "25px Bonn";
        this.c.textAlign = "center";
        this.c.fillStyle = "white"    
        this.c.fillText("Punkty: "+this.points, this.canvas.width/2,  this.canvas.height/2-30) 
        this.c.fillText("Rekord: "+this.highscore, this.canvas.width/2,  this.canvas.height/2+10) 
        if(pasuePos()){
             this.colorButton = '#004b25'
        }else{
            this.colorButton = '#Be4b25'
        }
        this.c.fillStyle = this.colorButton;
        this.c.fillRect(this.canvas.width/2-42, this.canvas.height/2+40, 80, 30)
        this.c.font = "20px Bonn";
        this.c.textAlign = "center";
        this.c.fillStyle = "white"    
        this.c.fillText("Start", this.canvas.width/2,  this.canvas.height/2+60)   
        this.c.restore()
        }

        pasuePos(){
            if(mousePos.x<canvas.width/2-42+80&&
                mousePos.x>canvas.width/2-42&&
                mousePos.y< canvas.height/2+30+30&&
                mousePos.y>canvas.height/2+30){
                    return true
             }
        }

        update(){

            if(this.open===true){
                drawStartMenu()
            }
        }
        
       
    }
