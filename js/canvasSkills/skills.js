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
var spellbg = document.getElementById("spellBg")

let mousePos = {
    x:0,
    y:0,
}
var skill10width = 12;
var skill1width = 78;
var skill2width = 142;
var skill3width = 206;
var skill4width = 270;
var skill5width = 334;
var skill6width = 398;
var skill7width = 462;
var skill8width = 526;
var skill9width = 590;

var skillheight = 10
var skillwidth = 40



animate();

function animate(){
    // c.drawImage(spellbg,0,300,2048,500,0,0,640,100);

    c.beginPath();
    c.rect(0, 0, 640, 100)
    c.fillStyle = "white";
    c.fill();
    
    

    c.drawImage(skill10,skill10width,skillheight, skillwidth, skillwidth);
  
    
    c.drawImage(skill1,skill1width,skillheight, skillwidth, skillwidth);
  
    c.drawImage(skill2,skill2width,skillheight,skillwidth, skillwidth);
    c.save();
    c.globalAlpha = 0.1
    c.beginPath();
    c.rect(192, 0, 64, 100)
    c.fillStyle = "white";
    c.fill();
    c.drawImage(skill3,skill3width,skillheight,skillwidth, skillwidth);
    c.beginPath();
    c.rect(256, 0, 64, 100)
    c.fillStyle = "white";
    c.fill();
    c.drawImage(skill4,skill4width,skillheight,skillwidth, skillwidth);
    c.beginPath();
    c.rect(320, 0, 64, 100)
    c.fillStyle = "white";
    c.fill();
    c.drawImage(skill5,skill5width,skillheight,skillwidth, skillwidth);
    c.beginPath();
    c.rect(384, 0, 64, 100)
    c.fillStyle = "white";
    c.fill();
    c.drawImage(skill6,skill6width,skillheight,skillwidth, skillwidth);
    c.beginPath();
    c.rect(448, 0, 64, 100)
    c.fillStyle = "white";
    c.fill();
    c.drawImage(skill7,skill7width,skillheight,skillwidth, skillwidth);
    c.beginPath();
    c.rect(512, 0, 64, 100)
    c.fillStyle = "white";
    c.fill();
    c.drawImage(skill8,skill8width,skillheight,skillwidth, skillwidth);
    c.beginPath();
    c.rect(576, 0, 64, 100)
    c.fillStyle = "white";
    c.fill();
    c.drawImage(skill9,skill9width,skillheight,skillwidth, skillwidth);
    c.restore();
    
    c.drawImage(mouse,skill10width,skillheight+skill10.height*1.2+5,mouse.height/15,mouse.width/15)
    c.drawImage(keyboard, 337.5, 337.5, 112.5, 112.5, skill1width, skillheight+ skillwidth+5,  skillwidth,skillwidth);
    c.drawImage(keyboard, 450, 337.5, 112.5, 112.5, skill2width, skillheight+ skillwidth+5, skillwidth,skillwidth);
    c.drawImage(keyboard, 562.5, 337.5, 112.5, 112.5, skill3width, skillheight+ skillwidth+5, skillwidth,skillwidth);
    c.drawImage(keyboard, 675, 337.5, 112.5, 112.5, skill4width, skillheight+ skillwidth+5, skillwidth,skillwidth);
    c.drawImage(keyboard, 787.5, 337.5, 112.5, 112.5, skill5width, skillheight+ skillwidth+5, skillwidth,skillwidth);
    c.drawImage(keyboard, 337.5, 450, 112.5, 112.5, skill6width, skillheight+ skillwidth+5, skillwidth,skillwidth);
    c.drawImage(keyboard, 450, 450, 112.5, 112.5, skill7width, skillheight+ skillwidth+5, skillwidth,skillwidth);
    c.drawImage(keyboard, 562.5, 450, 112.5, 112.5, skill8width, skillheight+ skillwidth+5,skillwidth,skillwidth);
    c.drawImage(keyboard, 675, 450, 112.5, 112.5, skill9width, skillheight+ skillwidth+5, skillwidth,skillwidth);

    if(mousePos.x<64&&mousePos.x>=0&&mousePos.y>0&&mousePos.y<100){
        
        c.beginPath();
        c.rect(0, 0, 64, 100)
        c.fillStyle = "white";
        c.fill();
        c.font = "10px Comic Sans MS";
        c.fillStyle = "black";
        c.fillText("CD: 0s", 10, 45);
        c.fillText("Mana: 1 ", 10, 60);
    }else if(mousePos.x<128&&mousePos.x>=64&&mousePos.y>0&&mousePos.y<100){
        c.beginPath();
        c.rect(64, 0, 64, 100)
        c.fillStyle = "white";
        c.fill();
        c.font = "10px Comic Sans MS";
        c.fillStyle = "black";
        c.fillText("CD: 1s", 74, 45);
        c.fillText("Mana: 5 ", 74, 60);
    }else if(mousePos.x<192&&mousePos.x>=128&&mousePos.y>0&&mousePos.y<100){
        c.beginPath();
        c.rect(128, 0, 64, 100)
        c.fillStyle = "white";
        c.fill();
        c.font = "10px Comic Sans MS";
        c.fillStyle = "black";
        c.fillText("CD: 3s", 138, 45);
        c.fillText("Mana: 15 ", 138, 60);
    }else if(mousePos.x<256&&mousePos.x>=192&&mousePos.y>0&&mousePos.y<100){
        c.beginPath();
        c.rect(192, 0, 64, 100)
        c.fillStyle = "white";
        c.fill();
    }else if(mousePos.x<320&&mousePos.x>=256&&mousePos.y>0&&mousePos.y<100){
        c.beginPath();
        c.rect(256, 0, 64, 100)
        c.fillStyle = "white";
        c.fill();
    }else if(mousePos.x<384&&mousePos.x>=320&&mousePos.y>0&&mousePos.y<100){
        c.beginPath();
        c.rect(320, 0, 64, 100)
        c.fillStyle = "white";
        c.fill();
    }else if(mousePos.x<448&&mousePos.x>=384&&mousePos.y>0&&mousePos.y<100){
        c.beginPath();
        c.rect(384, 0, 64, 100)
        c.fillStyle = "white";
        c.fill();
    }else if(mousePos.x<512&&mousePos.x>=448&&mousePos.y>0&&mousePos.y<100){      
        c.beginPath();
        c.rect(448, 0, 64, 100)
        c.fillStyle = "white";
        c.fill();
    }else if(mousePos.x<576&&mousePos.x>=512&&mousePos.y>0&&mousePos.y<100){      
        c.beginPath();
        c.rect(512, 0, 64, 100)
        c.fillStyle = "white";
        c.fill();
    }else if(mousePos.x<640&&mousePos.x>=576&&mousePos.y>0&&mousePos.y<100){      
        c.beginPath();
        c.rect(576, 0, 64, 100)
        c.fillStyle = "white";
        c.fill();
    }
    


        requestAnimationFrame(animate);
}



document.addEventListener('mousemove', function(e){
    var rect = canvas.getBoundingClientRect();

    mousePos.x = e.pageX-rect.left
    mousePos.y = e.pageY-rect.top;
}, false);