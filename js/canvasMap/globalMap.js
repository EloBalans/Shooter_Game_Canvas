import { Location } from "./location.js"

const canvas = document.getElementById('canvasMap');
const c = canvas.getContext('2d')
var map = document.getElementById("map");
canvas.width = 640;
canvas.height = 480;
var loc;
var locations = [];
let mousePos = {
    x:0,
    y:0,
}
locations[0] = new Location(45,425,30,1)

animate();



function location(){
    locations.forEach(location => {
        loc = location.isInPath(mousePos.x,mousePos.y)
        console.log(loc)
        location.update();
        
    });
}
function animate(){

  
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
        window.location = "game.html";
    }
});