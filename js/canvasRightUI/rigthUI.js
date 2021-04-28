const canvas = document.getElementById('canvas3');
const c = canvas.getContext('2d');
const bg = document.getElementById("dragonBG");
canvas.height = 480;
canvas.width = 240;


animate();

export function restParams(...params) {
    params[o]
}

function animate(){
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



   
    
    requestAnimationFrame(animate);
}