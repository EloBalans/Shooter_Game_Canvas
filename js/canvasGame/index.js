import { Player } from "./player.js";
import { Worm} from "./mobs/worm.js";
import { Skeleton } from "./mobs/skeleton.js";
import { Demon } from "./mobs/demon.js";
import { Hydra } from "./mobs/hydra.js";
import { Blob } from "./mobs/blob.js";
import { Ghost } from "./mobs/ghost.js";
import { Attack } from "./attack.js";
import { Mana } from "./buffs/mana.js";
import { LightningBolt } from "./spells/lightningBolt.js";
import { Lightning } from "./spells/lightning.js";
import { Hp } from "./buffs/hp.js";
import { Particle } from "./particle.js";

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

//const screenx = window.screen.availWidth*parseInt(canvas.style.marginLeft)/100;
//const screeny = window.screen.availHeight*parseInt(canvas.style.marginTop)/100;
let player = new Player(320,240,10,"blue",2,100,10,3,0,3);
let attacks = [];
let lightnings = [];
let lightningBolts = [];
let mobs = [];
let buffs = [];
let particles = [];
let monsterShoots = [];
let mousePos = {
    x:0,
    y:0,
}
let disable1 = false
let disable2 = false

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

scoreEL.innerHTML = player.points;
ammoEL.innerHTML = player.ammo;
hpEL.innerHTML = player.hp;
hptowerEL.innerHTML = player.hptower;
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


function init(){
    player = new Player(320,240,10,2,100,10,3,0,3);
    attacks = [];
    mobs = [];
    particles = [];
    buffs = [];
    monsterShoots = [];
    hptowerEL.innerHTML = player.hptower;
    hpEL.innerHTML = player.hp;
    modalScoreEL.innerHTML = player.points;
    scoreEL.innerHTML = player.points;
    ammoEL.innerHTML = player.ammo;
    
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

function setSpawnMap(){
    if(cookieMap==='map=1'){
        spawnMobsMap1();
        checkhighScore('gameHighScoreMap1')
    }if(cookieMap==='map=2'){
        spawnMobsMap1();
        checkhighScore('gameHighScoreMap2')
    }if(cookieMap==='map=3'){
        spawnMobsMap1();
        checkhighScore('gameHighScoreMap3')
    }if(cookieMap==='map=4'){
        spawnMobsMap1();
        checkhighScore('gameHighScoreMap4')
    }if(cookieMap==='map=5'){
        spawnMobsMap1();
        checkhighScore('gameHighScoreMap5')
    }if(cookieMap==='map=6'){
        spawnMobsMap2();
        checkhighScore('gameHighScoreMap6')
    }if(cookieMap==='map=7'){
        spawnMobsMap1();
        checkhighScore('gameHighScoreMap7')
    }if(cookieMap==='map=8'){
        spawnMobsMap1();
        checkhighScore('gameHighScoreMap8')
    }if(cookieMap==='map=9'){
        spawnMobsMap2();
        checkhighScore('gameHighScoreMap9')
    }if(cookieMap==='map=10'){
        spawnMobsMap1();
        checkhighScore('gameHighScoreMap10')
    }if(cookieMap==='map=11'){
        spawnMobsMap2();
        checkhighScore('gameHighScoreMap11')
    }if(cookieMap==='map=12'){
        spawnMobsMap3();
        checkhighScore('gameHighScoreMap12')
    }
}

function spawnMobsMap1(){
    spawnMobSkeleton();
    spawnMobDemon();
    spawnMobGhost();
}

function spawnMobsMap2(){
    spawnMobBlob();
}
function spawnMobsMap3(){
    spawnMobHydra()
    SpawnShoots()
}
function spawnMobsMap4(){
    
}

function checkhighScore(highScoree){
    modalHighScoreEL.textContent = localStorage.getItem(highScoree);
    if(player.points> localStorage.getItem(highScoree) ){
        localStorage.setItem(highScoree, player.points)
        modalHighScoreEL.textContent = localStorage.getItem(highScoree);
    }
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();

    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
      
    };
    
}


function circleRect(cx,cy,radius,rx,ry,rw,rh) {

    // temporary variables to set edges for testing
    let testX = cx;
    let testY = cy;
  
    // which edge is closest?
    if (cx < rx)         testX = rx;      // test left edge
    else if (cx > rx+rw) testX = rx+rw;   // right edge
    if (cy < ry)         testY = ry;      // top edge
    else if (cy > ry+rh) testY = ry+rh;   // bottom edge
  
    // get distance from closest edges
    let distX = cx-testX;
    let distY = cy-testY;
    let  distance = Math.sqrt( (distX*distX) + (distY*distY) );
  
    // if the distance is less than the radius, collision!
    if (distance <= radius) {
      return true;
    }
    return false;
  }

  

// function spawnMob(){
//     setInterval(()=>{
//         const x = Math.random()<5;
//         const y = randomY(75,400)
//         const radius = Math.floor(Math.random()*4+1)*10;
//         const color = 'green'
//         const angle = Math.atan2(
//             0,
//             1,
//          );
//          const velocity = {
//              x: Math.cos(angle),
//              y: Math.sin(angle),
//          }
//         mobs.push(new Mob(x,y,radius,color,velocity))
//     },time)
   
// }

function spawnMobSkeleton(){
    
    setInterval(()=>{
    
        const x = Math.random()<5;
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
    
        const x = Math.random()<5;
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
    if(time>500){
        time=time-5;
    }
   
    
        const x = Math.random()<5;
        const y = randomY(75,400)
        const radius = Math.floor(Math.random()*4+1)*10;
        const angle = Math.atan2(
            0,
            1,
         );
         const velocity = {
             x: Math.cos(angle),
             y: Math.sin(angle),
         }
         const nr = 3;
        mobs.push(new Worm(x,y,radius,velocity,nr))
    
    setTimeout(()=>{spawnMobWorm();},time)
}

function spawnMobBlob(){
    
    setInterval(()=>{
    
        const x = Math.random()<5;
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
    
        const x = Math.random()<5;
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


function animate(){

    animationID = requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
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
                
                hpEL.innerHTML = player.hp;
                if(player.hp===0){
                    cancelAnimationFrame(animationID);
                    modalScoreEL.innerHTML = player.points
                    modalEl.style.display = 'flex'
    
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
               
                ammoEL.innerHTML = player.ammo;
                buffs.splice(index,1) 
            }else if(buff.nr===2){
                player.hp++;
                hpEL.innerHTML = player.hp;
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
                hptowerEL.innerHTML = player.hptower;
            },0)
        }
        if(player.hptower<=0){
            cancelAnimationFrame(animationID);
            modalEl.style.display = 'flex'
            modalScoreEL.innerHTML = player.points
        }
        
      

        lightnings.forEach((lightning)=>{
          
            
            if (circleRect(lightning.x+lightning.direction.x*60,lightning.y+lightning.direction.y*60,lightning.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true&&lightning.timer===15) {
                
               
                    mob.hp=mob.hp-40;
                
                    
                    if(mob.hp<1){
                        player.points=player.points+10;
                        
                        scoreEL.innerHTML = player.points;
                        mobs.splice(index,1)
                    }
                    
             }
            
            
        
        })
        lightningBolts.forEach((spell)=>{
           
            if(circleRect(spell.x,spell.y,spell.radius,mob.x,mob.y,mob.hitboxX,mob.hitboxY)===true&&spell.timer===15){
               
                    mob.hp=mob.hp-40;
                
                if(mob.hp<1){
                    player.points=player.points+10;
                    
                    scoreEL.innerHTML = player.points;
                    mobs.splice(index,1)
                    
                
                }
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
                    
                    scoreEL.innerHTML = player.points;
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
            hpEL.innerHTML = player.hp;
            player.immune = true
            setTimeout(()=>{
                player.immune = false;
            },700)
            if(player.hp===0){
                cancelAnimationFrame(animationID);
                modalScoreEL.innerHTML = player.points
                modalEl.style.display = 'flex'

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

}



window.addEventListener("keydown", event => player.keys[event.key.toLowerCase()] = true);
window.addEventListener("keyup", event => player.keys[event.key.toLowerCase()] = false);
window.addEventListener('click', event =>{
    let pos = getMousePos(canvas, event);
if(pos.x<canvas.width&&pos.x>0&&pos.y<canvas.height&&pos.y>0&&pauseEl.style.display === 'none'&&modalEl.style.display === 'none'){
    ammoEL.innerHTML = player.ammo;

    const angle = Math.atan2(
       pos.y-  player.y,
       pos.x-  player.x,

    );
    
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle),
    }
    
    if(player.ammo>0){
        player.ammo =player.ammo-1;
        
        attacks.push(new Attack(
            player.x,player.y,5,"blue",velocity,5,angle,
        ));
        
    }
    ammoEL.innerHTML = player.ammo;
}
});


document.addEventListener('mousemove', function(e){
    var rect = canvas.getBoundingClientRect();

    mousePos.x = e.pageX-rect.left
    mousePos.y = e.pageY-rect.top;
}, false);


window.addEventListener('keydown', event =>{

    if (event.code === 'Digit1' &&disable1===false&&player.ammo>4
    ) {
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
        ammoEL.innerHTML = player.ammo;
        disable1 = true;
        setTimeout(()=>{disable1 = false},1000)
    };
    
    if (event.code === 'Digit2'&&disable2===false&&player.ammo>9) {
   
        lightningBolts.push(new LightningBolt(
            mousePos.x-15,mousePos.y-15,30,1
        ));
        player.ammo=player.ammo-15;
        ammoEL.innerHTML = player.ammo;
        disable2 = true;
        setTimeout(()=>{disable2 = false},3000)
    };

});


startgameBtn.addEventListener('click', event =>{
    setTimeout(()=>{
        setSpawnMap()
        init();
        animate();
        spawnManaBuff();
        spawnHpBuff();
       
        modalEl.style.display = 'none'
    },100)
    
});

pausegameBtn.addEventListener('click', event =>{
    
    modalScore2EL.innerHTML = player.points
    pauseEl.style.display = 'flex'
    cancelAnimationFrame(animationID);
    
});

unpausegameBtn.addEventListener('click', event =>{
  
    pauseEl.style.display = 'none'
    animate();
    setSpawnMap()
    spawnManaBuff();
    spawnHpBuff();
   
    
});
