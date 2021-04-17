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

locations[0] = new Location(45,425,30,1)
locations[1] = new Location(300,440,30,2)
locations[2] = new Location(525,440,30,3)
locations[3] = new Location(500,310,30,4)

animate();



function location(){
    locations.forEach(location => {
        location.update();
    });

    for( let i = 0; i<locations.length;i++){
        if(locations[i].isInPath(mousePos.x,mousePos.y)){
            loc = locations[i].nr;
            return;
        }else{
            loc = null;
        }
    }
    
}
function animate(){
    console.log(loc)
  
    c.drawImage(map,0,0,640,480)
    location();
    requestAnimationFrame(animate);
    
}

document.addEventListener('mousemove', function(e){
    var rect = canvas.getBoundingClientRect();

    mousePos.x = e.pageX-rect.left
    mousePos.y = e.pageY-rect.top;
}, false);

window.addEventListener('click', event =>{
    if(loc===1){
        document.cookie = "map=1";
        window.location = "game.html";
    }
    else if(loc===2){
        document.cookie = "map=2";
        window.location = "game.html";
    }
    else if(loc===3){
        document.cookie = "map=3";
        window.location = "game.html";
    }else if(loc===4){
        document.cookie = "map=4";
        window.location = "game.html";
    }
});