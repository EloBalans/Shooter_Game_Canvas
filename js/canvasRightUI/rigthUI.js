const canvas = document.getElementById('canvas3');
const c = canvas.getContext('2d');
canvas.height = 480;
canvas.width = 240;

animate();

function animate(){
    c.beginPath();
    c.rect(0, 0, canvas.width,canvas.height)
    c.fillStyle = "white";
    c.fill();
    
    requestAnimationFrame(animate);
}