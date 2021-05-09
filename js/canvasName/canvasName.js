const canvas = document.getElementById('canvasName');
const c = canvas.getContext('2d');
const bg = document.getElementById("dragonBG");

canvas.height = 100;
canvas.width = 640;

window.onload = animate()

function animate(){
    
    c.drawImage(
        bg,
        0,
        1600,
        canvas.width*3,
        canvas.height*3,
        0,
        0,
        canvas.width,
        canvas.height
        );

    c.font = "45px Bonn";
    c.textAlign = "center";
    c.fillStyle = "white"    
    c.shadowBlur = 20;
    c.shadowColor = "black";
    c.fillText("DUNGEONS",canvas.width/2,canvas.height/2+15)

    
    
    requestAnimationFrame(animate);
}
