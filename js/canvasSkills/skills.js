import { SkillIcon } from "./skillIcon.js"

const canvas = document.getElementById('canvas2');
const c = canvas.getContext('2d');
canvas.height = 100;
canvas.width = 640;

let mousePos = {x:0, y:0,}

var skills= [];
var skillHeigth = 40;
var skillWidth = 40;
var offsetX = 64

skills[0] = new SkillIcon(1,offsetX*0,0,skillWidth,skillHeigth,document.getElementById("skill10"),0, 0);
skills[1] = new SkillIcon(2,offsetX*1,0,skillWidth,skillHeigth ,document.getElementById("skill1"),337.5, 337.5);
skills[2] = new SkillIcon(3,offsetX*2,0,skillWidth,skillHeigth ,document.getElementById("skill2"),450, 337.5);
skills[3] = new SkillIcon(4,offsetX*3,0,skillWidth,skillHeigth ,document.getElementById("skill3"),562.5, 337.5);
skills[4] = new SkillIcon(5,offsetX*4,0,skillWidth,skillHeigth ,document.getElementById("skill4"),675, 337.5);
skills[5] = new SkillIcon(6,offsetX*5,0,skillWidth,skillHeigth ,document.getElementById("skill5"),787.5, 337.5);
skills[6] = new SkillIcon(7,offsetX*6,0,skillWidth,skillHeigth ,document.getElementById("skill6"),337.5, 450);
skills[7] = new SkillIcon(8,offsetX*7,0,skillWidth,skillHeigth ,document.getElementById("skill7"), 450, 450);
skills[8] = new SkillIcon(9,offsetX*8,0,skillWidth,skillHeigth ,document.getElementById("skill8"),562.5, 450);
skills[9] = new SkillIcon(10,offsetX*9,0,skillWidth,skillHeigth ,document.getElementById("skill9"),675, 450);



window.onload = animate();

function animate(){
    
    skills.forEach(skill => {
        skill.update();
    });
    requestAnimationFrame(animate);
}

export function cooldownIcon(...cooldown) {
    for(let i = 0; i<cooldown.length;i++){
        if(cooldown[i]===true){
            skills[i+1].cooldown = true;
        }else{
            skills[i+1].cooldown = false;
        }
    }
}

export function cooldownTime(...cooldownTime) {
   
    for(let i = 0; i<cooldownTime.length;i++){
        skills[i+1].cooldownTime = cooldownTime[i]

        
    }
}

export function disableSkillIcon(...disable) {
    skills[0].locked = false;
    for(let i = 1; i<disable.length;i++){
        if(disable[i-1]===false){
            skills[i].locked = false;
        }
    }
}

document.addEventListener('mousemove', function(e){
    var rect = canvas.getBoundingClientRect();

    mousePos.x = e.pageX-rect.left
    mousePos.y = e.pageY-rect.top;
}, false);