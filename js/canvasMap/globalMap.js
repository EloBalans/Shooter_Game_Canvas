import { Location } from "./location.js"

const canvas = document.getElementById('canvasMap');
const c = canvas.getContext('2d')
var map = document.getElementById("map");
canvas.width = 640;
canvas.height = 480;
let loc = null;
var locations = [];
let mousePos = {
    x:0,
    y:0,
}

locations[0] = new Location(45,425,30,1,"Grobowiec Nieumarłych", document.getElementById("backgroundMap7"))
locations[1] = new Location(180 ,400,30,2,"Rozdroża",document.getElementById("backgroundMap10"))
locations[2] = new Location(300,440,30,3,"Pola Rosherwooda",document.getElementById("backgroundMap11"))
locations[3] = new Location(525,440,30,4,"Grobowiec Lorda Dominika",document.getElementById("backgroundMap8"))
locations[4] = new Location(500,310,30,5,"Zapomniany las",document.getElementById("backgroundMap12"))
locations[5] = new Location(400,300,30,6,"Podwodne rozpadliny",document.getElementById("backgroundMap1"))
locations[6] = new Location(250,200,30,7,"Zniszczone pustkowia",document.getElementById("backgroundMap4"))
locations[7] = new Location(80,150,30,8,"Czarne skalisko",document.getElementById("backgroundMap5"))
locations[8] = new Location(150,100,30,9,"Wodny gąszcz",document.getElementById("backgroundMap2"))
locations[9] = new Location(440,70,30,10,"Wymarły las",document.getElementById("backgroundMap6"))
locations[10] = new Location(590,120,30,11,"Atlantyda",document.getElementById("backgroundMap3"))
locations[11] = new Location(595,235,30,12,"Zamek upadłego rodu",document.getElementById("backgroundMap9"))

animate();



function location(){
    locations.forEach(location => {
        location.update();
    });

    for( let i = 0; i<locations.length;i++){
        if(locations[i].isInPath(mousePos.x,mousePos.y)){
            loc = locations[i].nr;
            locations[i].radius = 40;
            return;
        }else{
            loc = null;
            locations[i].radius = 30;
        }
    }
    
}

function linesBetweenLoc(){
    for(let i = 0; i<locations.length-1;i++){
        c.save();
        c.beginPath();
        c.lineWidth = 2;
        c.setLineDash([5, 10]);
        c.moveTo(locations[i].x, locations[i].y);
        c.bezierCurveTo(locations[i].x+60, locations[i].y+50, locations[i].x+50,locations[i].y-50,locations[i+1].x,locations[i+1].y);
        c.stroke();
        c.restore();
    }
   
}



function animate(){
  
    c.drawImage(map,0,0,640,480)
    linesBetweenLoc()
    location();
    requestAnimationFrame(animate);
    
}

document.addEventListener('mousemove', function(e){
    var rect = canvas.getBoundingClientRect();

    mousePos.x = e.pageX-rect.left
    mousePos.y = e.pageY-rect.top;
}, false);

window.addEventListener('click', event =>{
   
    for(let i = 1;i<locations.length+1;i++){
        if(loc===i){
            document.cookie = ("map="+i);
            window.location = "game.html";  
        }
    }
});