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
locations[1] = new Location(180 ,400,30,2)
locations[2] = new Location(300,440,30,3)
locations[3] = new Location(525,440,30,4)
locations[4] = new Location(500,310,30,5)
locations[5] = new Location(400,300,30,6)
locations[6] = new Location(250,200,30,7)
locations[7] = new Location(80,150,30,8)
locations[8] = new Location(150,100,30,9)
locations[9] = new Location(440,30,30,10)
locations[10] = new Location(590,120,30,11)
locations[11] = new Location(595,235,30,12)

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
    // if(loc===1){
    //     document.cookie = "map=1";
    //     window.location = "game.html";
    // }
    // else if(loc===2){
    //     document.cookie = "map=2";
    //     window.location = "game.html";
    // }
    // else if(loc===3){
    //     document.cookie = "map=3";
    //     window.location = "game.html";
    // }else if(loc===4){
    //     document.cookie = "map=4";
    //     window.location = "game.html";
    // }
    for(let i = 1;i<locations.length+1;i++){
        console.log(i)
        if(loc===i){
            document.cookie = ("map="+i);
            window.location = "game.html";  
        }
    }
});