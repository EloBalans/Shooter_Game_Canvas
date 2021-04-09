const canvas = document.getElementById('canvas2');
const c = canvas.getContext('2d');
canvas.height = 100;
canvas.width = 640;
var skill1 = document.getElementById("skill1");
var skill2 = document.getElementById("skill2");
var skill3 = document.getElementById("skill3");
var skill4 = document.getElementById("skill4");
var skill5 = document.getElementById("skill5");
var skill6 = document.getElementById("skill6");
var skill7 = document.getElementById("skill7");
var skill8 = document.getElementById("skill8");
var skill9 = document.getElementById("skill9");
var skill10 = document.getElementById("skill10");
var keyboard = document.getElementById("keyboard")
var mouse = document.getElementById("mouse")

var skill10width = 16;
var skill1width = 80;
var skill2width = 144;
var skill3width = 208;
var skill4width = 272;
var skill5width = 336;
var skill6width = 400;
var skill7width = 464;
var skill8width = 528;
var skill9width = 592;

var skillheight = 10




animate();

function animate(){
    c.drawImage(skill10,skill10width,skillheight, skill10.width*1.2, skill10.height * 1.2);
    c.drawImage(skill1,skill1width,skillheight, skill1.width*1.2, skill1.height * 1.2);
    c.drawImage(skill2,skill2width,skillheight,skill2.width*1.2, skill2.height * 1.2);
    c.drawImage(skill3,skill3width,skillheight,skill3.width*1.2, skill3.height * 1.2);
    c.drawImage(skill4,skill4width,skillheight,skill4.width*1.2, skill4.height * 1.2);
    c.drawImage(skill5,skill5width,skillheight,skill5.width*1.2, skill5.height * 1.2);
    c.drawImage(skill6,skill6width,skillheight,skill6.width*1.2, skill6.height * 1.2);
    c.drawImage(skill7,skill7width,skillheight,skill7.width*1.2, skill7.height * 1.2);
    c.drawImage(skill8,skill8width,skillheight,skill8.width*1.2, skill8.height * 1.2);
    c.drawImage(skill9,skill9width,skillheight,skill9.width*1.2, skill9.height * 1.2);
    
    c.drawImage(mouse,skill10width,skillheight+skill10.height*1.2+5,mouse.height/15,mouse.width/15)
    c.drawImage(keyboard, 337.5, 337.5, 112.5, 112.5, skill1width, skillheight+skill1.height*1.2+5, 38.4, 38.4);
    c.drawImage(keyboard, 450, 337.5, 112.5, 112.5, skill2width, skillheight+skill2.height*1.2+5, 38.4, 38.4);
    c.drawImage(keyboard, 562.5, 337.5, 112.5, 112.5, skill3width, skillheight+skill3.height*1.2+5, 38.4, 38.4);
    c.drawImage(keyboard, 675, 337.5, 112.5, 112.5, skill4width, skillheight+skill4.height*1.2+5, 38.4, 38.4);
    c.drawImage(keyboard, 787.5, 337.5, 112.5, 112.5, skill5width, skillheight+skill5.height*1.2+5, 38.4, 38.4);
    c.drawImage(keyboard, 337.5, 450, 112.5, 112.5, skill6width, skillheight+skill6.height*1.2+5, 38.4, 38.4);
    c.drawImage(keyboard, 450, 450, 112.5, 112.5, skill7width, skillheight+skill7.height*1.2+5, 38.4, 38.4);
    c.drawImage(keyboard, 562.5, 450, 112.5, 112.5, skill8width, skillheight+skill8.height*1.2+5, 38.4, 38.4);
    c.drawImage(keyboard, 675, 450, 112.5, 112.5, skill9width, skillheight+skill9.height*1.2+5, 38.4, 38.4);

    requestAnimationFrame(animate);
}