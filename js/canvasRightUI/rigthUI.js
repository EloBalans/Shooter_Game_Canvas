const canvas = document.getElementById('canvas3');
const c = canvas.getContext('2d');
window.devicePixelRatio=2;
var scale = window.devicePixelRatio;    
const bg = document.getElementById("dragonBG");
const gitIcon = document.getElementById("gitIcon");
canvas.height = 480;
canvas.width = 240;
let mousePos = {
    x:0,
    y:0,
}

let points = 0
let mana = 100; 
let hp = 3
let hptower = 3

animate();

export function rightUIParams(...params) {
    points = params[0];
    mana = params[1];
    hp = params[2];
    hptower = params[3];

}

function animate(){
   
    drawBG();
    drawUI();
    requestAnimationFrame(animate);
}

function drawBG(){
    c.drawImage(
        bg,
        0,
        1300,
        canvas.width,
        canvas.height,
        0,
        0,
        canvas.width,
        canvas.height
        );
    
}

function drawUI(){
    c.save()
    c.font = "20px Bonn";
    c.textAlign = "center";
    c.fillStyle = "white"    
    c.fillText("Punkty: "+points,canvas.width/2,70)
    c.fillText("Mana: "+mana,canvas.width/2,95)
    c.fillText("Punkty życia: "+hp,canvas.width/2,120)
    c.fillText("Liczba potworów",canvas.width/2,145)
    c.fillText("jaką można przepuścic: "+hptower,canvas.width/2,165)
    c.font = "10px Bonn";
    c.fillText("Designed by Mateusz Zatoń",canvas.width/2,430)
    c.drawImage(gitIcon,canvas.width/2-15, 440, 30, 30);
    c.restore()
}

function gitRedirect(){
    if(mousePos.x<canvas.width/2-15+30&&
        mousePos.x>canvas.width/2-15&&
        mousePos.y< 440+30&&
        mousePos.y> 440
         ){
             window.open("https://github.com/EloBalans","_blank");
     }
}

document.addEventListener('mousemove', function(e){
    var rect = canvas.getBoundingClientRect();

    mousePos.x = e.pageX-rect.left
    mousePos.y = e.pageY-rect.top;
}, false);

window.addEventListener('click', event =>{
   gitRedirect()
});