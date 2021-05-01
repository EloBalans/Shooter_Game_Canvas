import { setSpawnMap,animate } from "./index.js"; 


const canvas = document.getElementById('canvas1');
const c = canvas.getContext('2d');
const bg = document.getElementById("dragonBG");    
let mousePos = {
    x:0,
    y:0,
}
let pauseOn = false
let colorButton  = '#Be4b25';
let points = 0;

export function paramsPause(pause,point){
    pauseOn = pause;
    points = point
}

export function drawPause(animationID){
    
    if(pauseOn){
        cancelAnimationFrame(animationID);
        c.drawImage(
            bg,
            300,
            1400,
            canvas.width,
            canvas.height,
            canvas.width/2-150,
            canvas.height/2-100,
            300, 
            200,
            );
        
        c.save()
        c.font = "25px Bonn";
        c.textAlign = "center";
        c.fillStyle = "white"    
        c.fillText("Punkty: "+points, canvas.width/2,  canvas.height/2)   
        if(pasuePos()){
            colorButton = '#004b25'
        }else{
            colorButton = '#Be4b25'
        }
        c.fillStyle = colorButton;
        c.fillRect(canvas.width/2-42, canvas.height/2+30, 80, 30)
        c.font = "20px Bonn";
        c.textAlign = "center";
        c.fillStyle = "white"    
        c.fillText("Wznów ", canvas.width/2,  canvas.height/2+50)   
        c.restore()
    }
}

function onClick(){
    if(pasuePos()&&pauseOn){
        setTimeout(()=>{
            pauseOn = false;
            animate();
        },100)
       
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
    onClick()
});