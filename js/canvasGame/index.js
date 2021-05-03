import { Player } from "./player.js";
import { Worm} from "./mobs/worm.js";
import { Skeleton } from "./mobs/skeleton.js";
import { Demon } from "./mobs/demon.js";
import { Hydra } from "./mobs/hydra.js";
import { Blob } from "./mobs/blob.js";
import { Ghost } from "./mobs/ghost.js";
import { Ghost2 } from "./mobs/ghost2.js";
import { OldGuardian } from "./mobs/oldGuardian.js";
import { Seeker } from "./mobs/seeker.js";
import { Sprout } from "./mobs/sprout.js";
import { OldGolem } from "./mobs/oldGolem.js";

import { Attack } from "./attack.js";
import { Mana } from "./buffs/mana.js";
import { LightningBolt } from "./spells/lightningBolt.js";
import { Lightning } from "./spells/lightning.js";
import { MidasTouch } from "./spells/midasTouch.js";
import { SunStrike } from "./spells/sunStrike.js";
import { Explosion } from "./spells/explosion.js";
import { Spike } from "./spells/spike.js";
import { FireWall } from "./spells/fireWall.js";
import { Shield } from "./spells/shield.js";
import { BlackHole } from "./spells/blackHole.js";

import { Hp } from "./buffs/hp.js";
import { Particle } from "./particle.js";

import { cooldownIcon,cooldownTime, disableSkillIcon } from "../canvasSkills/skills.js";
import { rightUIParams } from "../canvasRightUI/rigthUI.js";
import { drawPause } from "./pause.js";
import { drawStartGame,paramsStart} from "./startGame.js";



const canvas = document.getElementById('canvas1');
const c = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

//const screenx = window.screen.availWidth*parseInt(canvas.style.marginLeft)/100;
//const screeny = window.screen.availHeight*parseInt(canvas.style.marginTop)/100;
let player = new Player(320,240,10,"blue",2,100,10,3,0,3);
let attacks = [];
let lightnings = [];
let lightningBolts = [];
let midasTouchs = [];
let sunStrikes = [];
let explosions = [];
let spikes = [];
let fireWalls = [];
let shields = [];
let blackHoles = [];
let mobs = [];
let buffs = [];
let particles = [];
let monsterShoots = [];
let mousePos = {
    x:0,
    y:0,
}
let cooldown= [false,false,false,false,false,false,false,false,false]
let cooldownSec = [1,3,3,3,1,3,3,3,3]
let disableSkill = [false,true,true,true,true,true,true,true,true]


let cookieMap = document.cookie;

 
const backgroundMap1 = document.getElementById("backgroundMap1");
const backgroundMap2 = document.getElementById("backgroundMap2");
const backgroundMap3 = document.getElementById("backgroundMap3");
const backgroundMap4 = document.getElementById("backgroundMap4");
const backgroundMap5 = document.getElementById("backgroundMap5");
const backgroundMap6 = document.getElementById("backgroundMap6");
const backgroundMap7 = document.getElementById("backgroundMap7");
const backgroundMap8 = document.getElementById("backgroundMap8");
const backgroundMap9 = document.getElementById("backgroundMap9");
const backgroundMap10 = document.getElementById("backgroundMap10");
const backgroundMap11 = document.getElementById("backgroundMap11");
const backgroundMap12 = document.getElementById("backgroundMap12");

const randomY = (from, to) => Math.floor(Math.random()*(to-from))+from;

const scoreEL = document.querySelector('#scoreEL');
const ammoEL = document.querySelector('#ammoEL');
const hpEL = document.querySelector('#hpEL');
const hptowerEL = document.querySelector('#hptowerEL');


const startgameBtn = document.querySelector('#startGameBtn');
const pausegameBtn = document.querySelector('#pauseGameBtn');
const unpausegameBtn = document.querySelector('#unpauseGameBtn');
const modalEl = document.querySelector('#modalEl');
const pauseEl = document.querySelector('#pauseEl');
const modalScoreEL = document.querySelector('#modalScoreEL');
const modalScore2EL = document.querySelector('#modalScore2EL');
const modalHighScoreEL = document.querySelector('#modalHighScoreEL');

let highScoreMap = [];

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

let time = 1000;
let animationID;


export function init(){
    player = new Player(320,240,10,2,100,10,3,0,3);
    attacks = [];
    mobs = [];
    particles = [];
    lightnings = [];
    lightningBolts = [];
    midasTouchs = [];
    sunStrikes = [];
    explosions = [];
    spikes = [];
    fireWalls = [];
    shields = [];
    blackHoles = [];

    buffs = [];
    monsterShoots = [];
    
}

function setGameMap(){
    
    
    if(cookieMap==='map=1'){
        c.drawImage(backgroundMap7,0,0,canvas.width,canvas.height)
    }if(cookieMap==='map=2'){
        c.drawImage(backgroundMap10,0,0,canvas.width,canvas.height)
    }if(cookieMap==='map=3'){
        c.drawImage(backgroundMap11,0,0,canvas.width,canvas.height)
    }if(cookieMap==='map=4'){
        c.drawImage(backgroundMap8,0,0,canvas.width,canvas.height)
    }if(cookieMap==='map=5'){
        c.drawImage(backgroundMap12,0,0,canvas.width,canvas.height)
    }if(cookieMap==='map=6'){
        c.drawImage(backgroundMap1,0,0,canvas.width,canvas.height)
    }if(cookieMap==='map=7'){
        c.drawImage(backgroundMap4,0,0,canvas.width,canvas.height)
    }if(cookieMap==='map=8'){
        c.drawImage(backgroundMap5,0,0,canvas.width,canvas.height)
    }if(cookieMap==='map=9'){
        c.drawImage(backgroundMap2,0,0,canvas.width,canvas.height)
    }if(cookieMap==='map=10'){
        c.drawImage(backgroundMap6,0,0,canvas.width,canvas.height)
    }if(cookieMap==='map=11'){
        c.drawImage(backgroundMap3,0,0,canvas.width,canvas.height)
    }if(cookieMap==='map=12'){
        c.drawImage(backgroundMap9,0,0,canvas.width,canvas.height)
    }
    
    
   
}

export function setSpawnMap(){
    spawnManaBuff();
    spawnHpBuff();
    skillsSet()
    if(cookieMap==='map=1'){
        spawnMobsTomb()
        checkhighScore('gameHighScoreMap1')
    }if(cookieMap==='map=2'){
        spawnMobsForest3()
        checkhighScore('gameHighScoreMap2')
    }if(cookieMap==='map=3'){
        spawnMobsForest();
        checkhighScore('gameHighScoreMap3')
    }if(cookieMap==='map=4'){
        spawnMobsTomb2()
        checkhighScore('gameHighScoreMap4')
    }if(cookieMap==='map=5'){
        spawnMobsForest2();
        checkhighScore('gameHighScoreMap5')
    }if(cookieMap==='map=6'){
        spawnMobsWater();
        checkhighScore('gameHighScoreMap6')
    }if(cookieMap==='map=7'){
        spawnMobsAsh();
    }if(cookieMap==='map=8'){
        spawnMobsash2;
        checkhighScore('gameHighScoreMap8')
    }if(cookieMap==='map=9'){
        spawnMobsWater();
        checkhighScore('gameHighScoreMap9')
    }if(cookieMap==='map=10'){
        spawnMobsash3()
        checkhighScore('gameHighScoreMap10')
    }if(cookieMap==='map=11'){
        spawnMobsWater() 
        spawnMobsWater()
        checkhighScore('gameHighScoreMap11')
    }if(cookieMap==='map=12'){
        spawnMobsBos()
        checkhighScore('gameHighScoreMap12')
    }
}

function spawnMobsTomb(){
    spawnMobSkeleton();
    spawnMobDemon();
    spawnMobGhost();
}

function spawnMobsTomb2(){
    spawnMobSkeleton();
    spawnMobGhost();
    spawnMobGhost2();
    spawnMobOldGolem()
}
function spawnMobsForest(){
    spawnMobWorm()
    spawnMobSprout()
    spawnMobSeeker()
}

function spawnMobsForest2(){
    spawnMobWorm()
    spawnMobSprout()
    spawnMobSkeleton();
}

function spawnMobsForest3(){
    spawnMobSprout()
    spawnMobSkeleton();
    spawnMobOldGuardian()
}


function spawnMobsWater(){
    spawnMobBlob();
}

function spawnMobsAsh(){
    spawnMobSkeleton();
    spawnMobGhost2();
    spawnMobOldGuardian()
    spawnMobOldGolem()
}
function spawnMobsash2(){
    spawnMobSprout()
    spawnMobSeeker()
    spawnMobOldGolem()
}
function spawnMobsash3(){
    spawnMobSprout()
    spawnMobSkeleton();
    spawnMobOldGolem()
    spawnMobSeeker()
}

function spawnMobsBos(){
    spawnMobHydra()
    SpawnShoots()
}

function skillsSet(){
    for(let i = 0; i < 9;i++){
        if(highScoreMap[i]>700){
            disableSkill[i+1]=false;
        }
    }
}

function checkhighScore(highScoree){
    let highscore = localStorage.getItem(highScoree);
    if(player.points> localStorage.getItem(highScoree) ){
        localStorage.setItem(highScoree, player.points)
        highscore = localStorage.getItem(highScoree);
    }
    console.log(highscore)
    paramsStart(true,player.points,highscore)
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();

    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
      
    };
}

function circleRect(cx,cy,radius,rx,ry,rw,rh) {

    let testX = cx;
    let testY = cy;

    if (cx < rx)         testX = rx;
    else if (cx > rx+rw) testX = rx+rw;
    if (cy < ry)         testY = ry;     
    else if (cy > ry+rh) testY = ry+rh;
    let distX = cx-testX;
    let distY = cy-testY;
    let  distance = Math.sqrt( (distX*distX) + (distY*distY) );
    if (distance <= radius) {
      return true;
    }
    return false;
  }

function spawnMobSkeleton(){
    
    setInterval(()=>{
    
        const x = -30;
        const y = randomY(75,400)
        const radius = Math.floor(Math.random()*4+1)*10;
        const color = 'green'
        const angle = Math.atan2(
            0,
            1,
         );
         const velocity = {
             x: Math.cos(angle),
             y: Math.sin(angle),
         }
         const nr = 1;
        mobs.push(new Skeleton(x,y,radius,velocity,nr,22,33))
    
    },1000)
}



function spawnMobDemon(){
    
    setInterval(()=>{
    
        const x = -30;
        const y = randomY(75,350)
        const hp = Math.floor(Math.random()*8+1)*10;
        const angle = Math.atan2(
            0,
            1,
         );
         const velocity = {
             x: Math.cos(angle),
             y: Math.sin(angle),
         }
         const nr = 2;
        mobs.push(new Demon(x,y,hp,velocity,nr,80,144))
    
    },5000)
}

function spawnMobWorm(){
    setInterval(()=>{
    
        const x = -50;
        const y = randomY(75,400)
        const hp = Math.floor(Math.random()*4+1)*10;
        const angle = Math.atan2(
            0,
            1,
         );
         const velocity = {
             x: Math.cos(angle),
             y: Math.sin(angle),
         }
         const nr = 3;
        mobs.push(new Worm(x,y,hp,velocity,nr,50,35))
    },1000)
}

function spawnMobBlob(){
    
    setInterval(()=>{
    
        const x = -30;
        const y = randomY(75,400)
        const radius = Math.floor(Math.random()*3+1)*10;
        const angle = Math.atan2(
            0,
            1*Math.floor(Math.random() * 2)  ,
         );
         const velocity = {
             x: Math.cos(angle),
             y: Math.sin(angle),
         }
         const nr = 4;
         const randomBlob = Math.floor(Math.random() * 3)  
        mobs.push(new Blob(x,y,radius,velocity,nr,40,30,randomBlob))
    
    },400)
}

function spawnMobGhost(){
    
    setInterval(()=>{
    
        const x = -40;
        const y = randomY(75,400)
        const radius = Math.floor(Math.random()*5+1)*10;
        const angle = Math.atan2(
            0,
            1*Math.floor(Math.random() * 2)  ,
         );
         const velocity = {
             x: Math.cos(angle),
             y: Math.sin(angle),
         }
         const nr = 5;
        mobs.push(new Ghost(x,y,radius,velocity,nr,30,45))
    
    },3000)
}

function spawnMobHydra(){
    
    setTimeout(()=>{
    
        const x = -200;
        const y = 165;
        const hp = 2400;
        const angle = Math.atan2(
            0,
            1,
         );
         const velocity = {
             x: Math.cos(angle),
             y: Math.sin(angle),
         }
         const nr = 6;
        mobs.push(new Hydra(x,y,hp,velocity,nr,200,150))
    
    },1000)
}

function spawnMobGhost2(){
    
    setInterval(()=>{
    
        const x = -40;
        const y = randomY(75,400)
        const hp = Math.floor(Math.random()*5+1)*10;
        const angle = Math.atan2(
            0,
            1*Math.floor(Math.random() * 2)  ,
         );
         const velocity = {
             x: Math.cos(angle),
             y: Math.sin(angle),
         }
         const nr = 7;
        mobs.push(new Ghost2(x,y,hp,velocity,nr,30,45))
    
    },1000)
}

function spawnMobOldGuardian(){
    
    setInterval(()=>{
    
        const x = -40;
        const y = randomY(75,400)
        const hp = 60;
        const angle = Math.atan2(
            0,
            1*Math.floor(Math.random() * 2)  ,
         );
         const velocity = {
             x: Math.cos(angle),
             y: Math.sin(angle),
         }
         const nr = 8;
        mobs.push(new OldGuardian(x,y,hp,velocity,nr,55,50))
    
    },5000)
}

function spawnMobSprout(){
    
    setInterval(()=>{
    
        const x = -40;
        const y = randomY(75,400)
        const hp = Math.floor(Math.random()*3+1)*10;
        const angle = Math.atan2(
            0,
            1*Math.floor(Math.random() * 2)  ,
         );
         const velocity = {
             x: Math.cos(angle),
             y: Math.sin(angle),
         }
         const nr = 9;
        mobs.push(new Sprout(x,y,hp,velocity,nr,50,50))
    
    },800)
}

function spawnMobSeeker(){
    
    setInterval(()=>{
    
        const x = -40;
        const y = randomY(75,400)
        const hp =60;
        const angle = Math.atan2(
            0,
            1*Math.floor(Math.random() * 2)  ,
         );
         const velocity = {
             x: Math.cos(angle),
             y: Math.sin(angle),
         }
         const nr = 10;
        mobs.push(new Seeker(x,y,hp,velocity,nr,50,80))
    
    },7000)
}

function spawnMobOldGolem(){
    
    setInterval(()=>{
    
        const x = -40;
        const y = randomY(75,400)
        const hp = 80;
        const angle = Math.atan2(
            0,
            1*Math.floor(Math.random() * 2)  ,
         );
         const velocity = {
             x: Math.cos(angle),
             y: Math.sin(angle),
         }
         const nr = 11;
        mobs.push(new OldGolem(x,y,hp,velocity,nr,60,85))
    
    },8000)
}

function spawnManaBuff(){
    setInterval(()=>{
        const x = randomY(70,620);
        const y = randomY(70,400);
        const radius = 10;
        const nr = 1
        buffs.push(new Mana(x,y,radius,nr))
    },6000)
   
}

function spawnHpBuff(){
    setInterval(()=>{
        const x = randomY(70,620);
        const y = randomY(70,400);
        const radius = 10;
        const nr = 2
        buffs.push(new Hp(x,y,radius,nr))
    },15000)
   
}

function SpawnShoots(){
    setInterval(()=>{
        mobs.forEach((mob)=>{
            for(let i = 0; i<7;i++){
            const a = Math.atan2(
                player.y-mob.y,
                player.x-mob.x,
         
            );
             
            const v = {
                x: Math.cos(Math.random()*3.6),
                y: Math.sin(Math.random()*3.6),
            }
            
                monsterShoots.push(new Attack(
                    mob.x+150,mob.y+(i*15),5,"blue",v,5,a,
                ));
            }    
           
                  
             
             
             })
           
    },1000)
}
drawStartGame(true);

export function animate(){
    animationID = requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    cooldownIcon(cooldown[0],cooldown[1],cooldown[2],cooldown[3],cooldown[4],cooldown[5],cooldown[6],cooldown[7],cooldown[8]);
    cooldownTime(cooldownSec[0],cooldownSec[1],cooldownSec[2],cooldownSec[3],cooldownSec[4],cooldownSec[5],cooldownSec[6],cooldownSec[7],cooldownSec[8]);
    rightUIParams(player.points,player.ammo,player.hp,player.hptower);
    disableSkillIcon(disableSkill[0],disableSkill[1],disableSkill[2],disableSkill[3],disableSkill[4],disableSkill[5],disableSkill[6],disableSkill[7],disableSkill[8]);
    setGameMap();
   
    // c.fillStyle = 'white'
    // c.fillRect(0, 0, canvas.width, canvas.height);

    player.draw();//spawn one player
 
    

   
    //update player shoots and delete when they arrive border of canvas
    attacks.forEach((attack, index)=>{
        attack.update();

        if(attack.x+attack.radius<0||
            attack.x-attack.radius>canvas.width||
            attack.y-attack.radius<0||
            attack.y-attack.radius>canvas.height){

            attacks.splice(index,1)
        }
    })

    monsterShoots.forEach((attackMonster, index)=>{
        attackMonster.update();

        if(attackMonster.x+attackMonster.radius<0||
            attackMonster.x-attackMonster.radius>canvas.width||
            attackMonster.y-attackMonster.radius<0||
            attackMonster.y-attackMonster.radius>canvas.height){

            monsterShoots.splice(index,1)
        }

        const dist = Math.hypot(attackMonster.x - player.x, attackMonster.y - player.y);

       
        if(dist - attackMonster.radius - player.radius < 1){
           
                player.hp--;
                
                if(player.hp===0){
                   
                    // modalEl.style.display = 'flex'
    
                }
                monsterShoots.splice(index,1) 
            }
            
    })

  
    buffs.forEach((buff,index)=>{
        buff.update();
        const dist1 = Math.hypot(buff.x - player.x, buff.y - player.y);

       
        if(dist1 - buff.radius - player.radius < 1){
            if(buff.nr===1){
                player.ammo=player.ammo+50;
               
                buffs.splice(index,1) 
            }else if(buff.nr===2){
                player.hp++;
                buffs.splice(index,1) 
            }
            
        }
        

}) 


    //calculation on mobs, spawning them
    mobs.forEach((mob,index)=>{
        mob.update();
        

        if(mob.x>=canvas.width+mob.hitboxX){
            setTimeout(()=> {
                mobs.splice(index, 1);
                player.hptower=player.hptower-1;
            },0)
        }
        if(player.hptower<=0){
            setTimeout(()=>{ paramsStart(true,player.points); },100)
            drawStartGame(animationID);
            // modalEl.style.display = 'flex'
        }
        
      

        lightnings.forEach((lightning)=>{
          
            
            if (circleRect(lightning.x+lightning.direction.x*60,lightning.y+lightning.direction.y*60,lightning.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true&&lightning.timer===15) {
                
               
                    mob.hp=mob.hp-40;
                
                    
                    if(mob.hp<1){
                        player.points=player.points+10;
                        
                        mobs.splice(index,1)
                    }
                    
             }
            
            
        
        })
        lightningBolts.forEach((spell)=>{
           
            if(circleRect(spell.x,spell.y,spell.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true&&spell.timer===15){
               
                    mob.hp=mob.hp-40;
                
                if(mob.hp<1){
                    player.points=player.points+10;
                    
                    mobs.splice(index,1)
                    
                
                }
            }
            
        
        })

        midasTouchs.forEach((spell)=>{
            if(circleRect(spell.x,spell.y,spell.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true
            // &&spell.timer===25
            ){

                    mob.x = mob.x -(mob.speed.x);
                    mob.y = mob.y -(mob.speed.y);
                    mob.frameCount--;
                
                
                
                if(mob.hp<1){
                    player.points=player.points+10;
                    
                    mobs.splice(index,1)
                    
                
                }
            }
            
        
        })

        sunStrikes.forEach((spell)=>{
            if(circleRect(spell.x,spell.y,spell.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true
             &&spell.timer===25
            ){
                
                mob.hp=mob.hp-40;
                
                
                if(mob.hp<1){
                    player.points=player.points+10;
                    
                    mobs.splice(index,1)
                    
                
                }
            }
            
        
        })

        explosions.forEach((spell)=>{
            if(circleRect(spell.x,spell.y,spell.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true
             &&spell.timer===25
            ){
                
                mob.hp=mob.hp-40;
                
                
                if(mob.hp<1){
                    player.points=player.points+10;
                    
                    mobs.splice(index,1)
                    
                
                }
            }
            
        
        })

        spikes.forEach((spell)=>{
            if(circleRect(spell.x,spell.y,spell.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true
             &&spell.timer===25
            ){
                
                
                mob.hp=mob.hp-10;
                
                
                if(mob.hp<1){
                    player.points=player.points+10;
                    
                    mobs.splice(index,1)
                    
                
                }
                
            }
            
        
        })
        fireWalls.forEach((spell)=>{
            if(circleRect(spell.x,spell.y,spell.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true
             &&spell.frameX===2||circleRect(spell.x,spell.y,spell.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true
             &&spell.frameX===7
            ){
                mob.hp=mob.hp-5;
                if(mob.hp<1){
                    player.points=player.points+10;
                    mobs.splice(index,1)
                }
            }
        })

        shields.forEach((spell)=>{
            if(circleRect(spell.x,spell.y,spell.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true){
                player.immune = true
            }else{
                player.immune = false
            }
        })
        blackHoles.forEach((spell)=>{
            if(circleRect(spell.x,spell.y,spell.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true){
                mob.x = mob.x -(mob.speed.x);
                mob.y = mob.y -(mob.speed.y);
                mob.hp = mob.hp-0.2;
                const angleBlackHole = Math.atan2(
                    mob.y-  spell.y,
                    mob.x-  spell.x,
             
                 );
                const directBlackHole = {
                    x: Math.cos(angleBlackHole),
                    y: Math.sin(angleBlackHole),
                }

                mob.x = mob.x -directBlackHole.x*5
                mob.y = mob.y -directBlackHole.y*5


            }if(mob.hp<1){
                player.points=player.points+10;
                mobs.splice(index,1)
            }
            
        })
        
        //spawn and delete shots from player
        attacks.forEach((attack, attackindex)=>{
            // if(dist - attack.radius - mob.radius < 1&& mob.radius>0){
                
                
                if(circleRect(attack.x,attack.y,attack.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true){

                for(let i = 0; i <7;i++){
                    particles.push(new Particle(attack.x,attack.y,2,'orange',{
                        x: Math.random() - 0.5,
                        y: Math.random() - 0.5,
                    }))
                   
                }

                mob.hp=mob.hp-10;
                if(mob.hp<1){
                    if(mob.nr===1){
                        player.points=player.points+10;
                    }if(mob.nr===2){
                        player.points=player.points+20;
                    }if(mob.nr===4){
                        player.points=player.points+5;
                    }if(mob.nr===5){
                        player.points=player.points+5;
                    }
                    
                   mobs.splice(index,1)
                    
                    // (function(index){
                    //     setTimeout(function(){
                    //         mobs.splice(mobs.indexOf(index), 1);
                    //     }, 1000);
                    //  })(mobs[index]);
                
                }

                setTimeout(()=> {
                    attacks.splice(attackindex,1)
                },0)
            }
        } )
       
        //spanw and delete mana buff
        buffs.forEach((buff,index)=>{
            
           
                buff.update();

                if(circleRect(buff.x,buff.y,buff.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true){
                    buffs.splice(index,1)
                   
                }
                

        }) 
        
        //calculate hp of player

        if(circleRect(player.x,player.y,player.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true&&player.immune===false){
           
            player.hp = player.hp-1;
            player.immune = true
            setTimeout(()=>{
                player.immune = false;
            },700)
            if(player.hp===0){
            setTimeout(()=>{ paramsStart(true,player.points); },100)
            drawStartGame(animationID);
               
                // modalEl.style.display = 'flex'

            }
            
        }

    })
    particles.forEach((particle,indexx )=>{
        
        if(particle.alpha <=0){
            particles.splice(indexx, 1);
        }else{
            particle.update();
        }
    })
    lightnings.forEach((spell, index)=>{
        spell.update();
       
        setTimeout(()=>{ lightnings.splice(index,1)},800)
    
    })
    lightningBolts.forEach((spell, index)=>{
        spell.update();
       
        setTimeout(()=>{ lightningBolts.splice(index,1)},800)
    
    })
    midasTouchs.forEach((spell, index)=>{
        spell.update();
       
        setTimeout(()=>{ midasTouchs.splice(index,1)},5000)
    
    })
    sunStrikes.forEach((spell, index)=>{
        spell.update();
       
        setTimeout(()=>{ sunStrikes.splice(index,1)},800)
    
    })
    explosions.forEach((spell, index)=>{
        spell.update();
       
        setTimeout(()=>{ explosions.splice(index,1)},800)
    
    })
    spikes.forEach((spell, index)=>{
        spell.update();
        

        if(spell.timer ===70){
            spikes.splice(index,1)
        }
      
    
    })
    fireWalls.forEach((spell, index)=>{
        spell.update();
        
        setTimeout(()=>{ fireWalls.splice(index,1)},5000)
    
    })
    shields.forEach((spell, index)=>{
        spell.update();
        spell.x = player.x-15
        spell.y = player.y-25
        
        setTimeout(()=>{ shields.splice(index,1)},5000)
    
    })
    blackHoles.forEach((spell, index)=>{
        spell.update();
        
        setTimeout(()=>{ blackHoles.splice(index,1)},5000)
    
    })
    drawPause(animationID);
    drawStartGame(animationID);
}



window.addEventListener("keydown", event => player.keys[event.key.toLowerCase()] = true);
window.addEventListener("keyup", event => player.keys[event.key.toLowerCase()] = false);
window.addEventListener('click', event =>{
    let pos = getMousePos(canvas, event);
if(pos.x<canvas.width&&pos.x>0&&pos.y<canvas.height&&pos.y>0
    // &&pauseEl.style.display === 'none'&&modalEl.style.display === 'none'
    ){
    

    const angle = Math.atan2(
       pos.y-  player.y,
       pos.x-  player.x,

    );
    
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle),
    }
    
        
        attacks.push(new Attack(
            player.x,player.y,5,"blue",velocity,5,angle,
        ));
        
    
}
});


document.addEventListener('mousemove', function(e){
    var rect = canvas.getBoundingClientRect();

    mousePos.x = e.pageX-rect.left
    mousePos.y = e.pageY-rect.top;
}, false);



window.addEventListener('keydown', event =>{

    if (event.code === 'Digit1' &&cooldown[0]===false&&player.ammo>4&&disableSkill[0]===false
    ) {
        cooldown[0] = true;
        const angle = Math.atan2(
            mousePos.y-  player.y,
            mousePos.x-  player.x,
     
         );
        const direction = {
            x: Math.cos(angle),
            y: Math.sin(angle),
        }

        lightnings.push(new Lightning(
            player.x-15,player.y-15,20,2,angle,direction
        ));
        player.ammo=player.ammo-5;
        
        setTimeout(()=>{cooldown[0] = false},cooldownSec[0]*1000)
    };
    
    if (event.code === 'Digit2'&&cooldown[1]===false&&player.ammo>9&&disableSkill[1]===false) {
        cooldown[1]= true;
        lightningBolts.push(new LightningBolt(
            mousePos.x-15,mousePos.y-15,30,3
        ));
        player.ammo=player.ammo-10;
        setTimeout(()=>{cooldown[1] = false},cooldownSec[1]*1000)
    };

    if (event.code === 'Digit3'&&cooldown[2]===false&&player.ammo>4&&disableSkill[2]===false) {
        cooldown[2] = true;
        midasTouchs.push(new MidasTouch(
            mousePos.x-15,mousePos.y-15,30,4
        ));
        player.ammo=player.ammo-5;
        setTimeout(()=>{cooldown[2] = false},cooldownSec[2]*1000)
    };

    if (event.code === 'Digit4'&&cooldown[3]===false&&player.ammo>4&&disableSkill[3]===false) {
        cooldown[3] = true;
        sunStrikes.push(new SunStrike(
            mousePos.x-15,mousePos.y-15,35,5
        ));
        player.ammo=player.ammo-5;
        setTimeout(()=>{cooldown[3] = false},cooldownSec[3]*1000)
    };

    if (event.code === 'Digit5'&&cooldown[4]===false&&player.ammo>4&&disableSkill[4]===false) {
        cooldown[4] = true;
        explosions.push(new Explosion(
            mousePos.x-15,mousePos.y-15,30,6
        ));
        player.ammo=player.ammo-5;
        setTimeout(()=>{cooldown[4] = false},cooldownSec[4]*1000)
    };

    if (event.code === 'Digit6'&&cooldown[5]===false&&player.ammo>4&&disableSkill[5]===false) {
        cooldown[5] = true;
        const playerPos = {x:player.x,y:player.y}
        const anglee = Math.atan2(
            mousePos.y-  player.y,
            mousePos.x-  player.x,
     
         );
        const direct = {
            x: Math.cos(anglee),
            y: Math.sin(anglee),
        }

        let i =0;
       var intv = setInterval(()=>{
           i++
        let spikeX = playerPos.x+direct.x*(i*20)-10
        let spikeY = playerPos.y+direct.y*(i*30)-16
        spikes.push(new Spike(
            spikeX,spikeY,30,7,anglee,direct
        ));
        if(spikeX+30<0||
            spikeX-30>canvas.width||
            spikeY-30<0||
            spikeY-30>canvas.height){
            clearInterval(intv);
        }
       },300)
            
        
      
        player.ammo=player.ammo-10;
        
        setTimeout(()=>{cooldown[5] = false},cooldownSec[5]*1000)
    };

    if (event.code === 'Digit7'&&cooldown[6]===false&&player.ammo>4&&disableSkill[6]===false) {
        cooldown[6] = true;
        fireWalls.push(new FireWall(
            mousePos.x-15,mousePos.y-15,30,6
        ));
        player.ammo=player.ammo-5;
        setTimeout(()=>{ cooldown[6] = false},cooldownSec[6]*1000)
    };

    if (event.code === 'Digit8'&&cooldown[7]===false&&player.ammo>4&&disableSkill[7]===false) {
        cooldown[7] = true;
        shields.push(new Shield(
            player.x-15,player.y-25,30,6
        ));
        player.ammo=player.ammo-5;
       
        setTimeout(()=>{cooldown[7] = false},cooldownSec[7]*1000)
    };

    if (event.code === 'Digit9'&&cooldown[8]===false&&player.ammo>19&&disableSkill[8]===false) {
        cooldown[8] = true;
        blackHoles.push(new BlackHole(
            mousePos.x-30,mousePos.y-30,60,6
        ));
        player.ammo=player.ammo-20;
       
        setTimeout(()=>{cooldown[8] = false},cooldownSec[8]*1000)
    };


});

window.blur(()=>{
    drawPause(animationID);
})

// startgameBtn.addEventListener('click', event =>{
//     setTimeout(()=>{
//         setSpawnMap()
//         init();
//         animate();
//         modalEl.style.display = 'none'
//     },100)
    
// });

// pausegameBtn.addEventListener('click', event =>{
    
//     modalScore2EL.innerHTML = player.points
//     pauseEl.style.display = 'flex'
//     cancelAnimationFrame(animationID);
    
// });

// unpausegameBtn.addEventListener('click', event =>{
  
//     pauseEl.style.display = 'none'
//     setSpawnMap()
//     animate();
   
    
// });
