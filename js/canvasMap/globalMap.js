import { Location } from "./location.js"

const canvas = document.getElementById('canvasMap');
const c = canvas.getContext('2d')
var map = document.getElementById("map");
canvas.width = 640;
canvas.height = 480;
let loc = null;
var locations = [];
var highScoreMap = [];
let mousePos = {
    x:0,
    y:0,
}


highScoreMap[0] = localStorage.getItem('gameHighScoreMap1') || localStorage.setItem('gameHighScoreMap1',0);
highScoreMap[1] = localStorage.getItem('gameHighScoreMap2') || localStorage.setItem('gameHighScoreMap2',0);
highScoreMap[2] = localStorage.getItem('gameHighScoreMap3') || localStorage.setItem('gameHighScoreMap3',0);
highScoreMap[3] = localStorage.getItem('gameHighScoreMap4') || localStorage.setItem('gameHighScoreMap4',0);
highScoreMap[4] = localStorage.getItem('gameHighScoreMap5') || localStorage.setItem('gameHighScoreMap5',0);
highScoreMap[5] = localStorage.getItem('gameHighScoreMap6') || localStorage.setItem('gameHighScoreMap6',0);
highScoreMap[6] = localStorage.getItem('gameHighScoreMap7') || localStorage.setItem('gameHighScoreMap7',0);
highScoreMap[7] = localStorage.getItem('gameHighScoreMap8') || localStorage.setItem('gameHighScoreMap8',0);
highScoreMap[8] = localStorage.getItem('gameHighScoreMap9') || localStorage.setItem('gameHighScoreMap9',0);
highScoreMap[9] = localStorage.getItem('gameHighScoreMap10') || localStorage.setItem('gameHighScoreMap10',0);
highScoreMap[10] = localStorage.getItem('gameHighScoreMap11') || localStorage.setItem('gameHighScoreMap11',0);
highScoreMap[11] = localStorage.getItem('gameHighScoreMap12') || localStorage.setItem('gameHighScoreMap12',0);

locations[0] = new Location(45,425,30,1,"Grobowiec Nieumarłych", document.getElementById("backgroundMap7"),highScoreMap[0])
locations[1] = new Location(180 ,400,30,2,"Rozdroża",document.getElementById("backgroundMap10"),highScoreMap[1])
locations[2] = new Location(300,425,30,3,"Pola Rosherwooda",document.getElementById("backgroundMap11"),highScoreMap[2])
locations[3] = new Location(525,440,30,4,"Grobowiec Lorda Dominika",document.getElementById("backgroundMap8"),highScoreMap[3])
locations[4] = new Location(500,310,30,5,"Zapomniany las",document.getElementById("backgroundMap12"),highScoreMap[4])
locations[5] = new Location(400,300,30,6,"Podwodne rozpadliny",document.getElementById("backgroundMap1"),highScoreMap[5])
locations[6] = new Location(250,200,30,7,"Zniszczone pustkowia",document.getElementById("backgroundMap4"),highScoreMap[6])
locations[7] = new Location(80,150,30,8,"Czarne skalisko",document.getElementById("backgroundMap5"),highScoreMap[7])
locations[8] = new Location(200,100,30,9,"Wodny gąszcz",document.getElementById("backgroundMap2"),highScoreMap[8])
locations[9] = new Location(440,70,30,10,"Wymarły las",document.getElementById("backgroundMap6"),highScoreMap[9])
locations[10] = new Location(590,120,30,11,"Atlantyda",document.getElementById("backgroundMap3"),highScoreMap[10])
locations[11] = new Location(595,235,30,12,"Zamek upadłego rodu",document.getElementById("backgroundMap9"),highScoreMap[11])

animate();



function location(){
    locations.forEach(location => {
        location.update();
    });

    for( let i = 0; i<locations.length;i++){

        locations[i].beforeLoc = highScoreMap[i-1] || 2000;
        if(locations[i].isInPath(mousePos.x,mousePos.y)){
            locations[i].radius = 40;
            if(locations[i].beforeLoc>700){
                loc = locations[i].nr;
            }
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