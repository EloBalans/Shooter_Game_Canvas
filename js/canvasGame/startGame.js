import { score,animate,init } from "./index.js"; 


const canvas = document.getElementById('canvas1');
const c = canvas.getContext('2d');
const bg = document.getElementById("dragonBG");    
let mousePos = {
    x:0,
    y:0,
}
let startOn = true
let colorButton  = '#Be4b25';
let points = 0;
let id
let highscore

export function paramsStart(pause,point,highScore){
    startOn = pause;
    points = point
    highscore = highScore
}

export function drawStartGame(animationID){
    id = animationID
    if(startOn){
        score();
        cancelAnimationFrame(animationID);
        c.drawImage(
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
        
        c.save()
        c.font = "25px Bonn";
        c.textAlign = "center";
        c.fillStyle = "white"    
        c.fillText("Punkty: "+points, canvas.width/2,  canvas.height/2-30) 
        c.fillText("Rekord: "+highscore, canvas.width/2,  canvas.height/2+10) 
        if(pasuePos()){
            colorButton = '#004b25'
        }else{
            colorButton = '#Be4b25'
        }
        c.fillStyle = colorButton;
        c.fillRect(canvas.width/2-42, canvas.height/2+40, 80, 30)
        c.font = "20px Bonn";
        c.textAlign = "center";
        c.fillStyle = "white"    
        c.fillText("Start", canvas.width/2,  canvas.height/2+60)   
        c.restore()
    }
}

function onClick(){
    if(pasuePos()&&startOn){
        startOn = false;
        init()
        animate();
    }
    
}

function pasuePos(){
    if(mousePos.x<canvas.width/2-42+80&&
        mousePos.x>canvas.width/2-42&&
        mousePos.y< canvas.height/2+30+30&&
        mousePos.y>canvas.height/2+30){
            return true
     }
}

document.addEventListener('mousemove', function(e){
    var rect = canvas.getBoundingClientRect();

    mousePos.x = e.pageX-rect.left
    mousePos.y = e.pageY-rect.top;
}, false);  

window.addEventListener('click', event =>{
    onClick();
});