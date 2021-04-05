import { Player } from "./player.js";
import { Mob } from "./mob.js";
import { Attack } from "./attack.js";
import { Buff } from "./buff.js";
import { Bomb } from "./bomb.js";
import { Particle } from "./particle.js";

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

//const screenx = window.screen.availWidth*parseInt(canvas.style.marginLeft)/100;
//const screeny = window.screen.availHeight*parseInt(canvas.style.marginTop)/100;
let player = new Player(320,240,10,"blue",2,100,10,3,0,3);
let attacks = [];
let mobs = [];
let buffs = [];
let bombs = [];
let particles = [];
const background1 = document.getElementById("background1");
const randomY = (from, to) => Math.floor(Math.random()*(to-from))+from;

const scoreEL = document.querySelector('#scoreEL');
const ammoEL = document.querySelector('#ammoEL');
const bombsEL = document.querySelector('#bombsEL');
const hpEL = document.querySelector('#hpEL');
const hptowerEL = document.querySelector('#hptowerEL');


const startgameBtn = document.querySelector('#startGameBtn');
const modalEl = document.querySelector('#modalEl');
const modalScoreEL = document.querySelector('#modalScoreEL');
const modalHighScoreEL = document.querySelector('#modalHighScoreEL');


scoreEL.innerHTML = player.points;
ammoEL.innerHTML = player.ammo;
bombsEL.innerHTML = player.bomb;
hpEL.innerHTML = player.hp;
hptowerEL.innerHTML = player.hptower;

let highScore = localStorage.getItem('gameHighScore') || 0;
modalHighScoreEL.textContent =  highScore;
let time = 1000;
let animationID;


function init(){
    player = new Player(320,240,10,"blue",2,100,10,3,0,3);
    attacks = [];
    mobs = [];
    buffs = [];
    bombs = [];
    particles = [];
    hptowerEL.innerHTML = player.hptower;
    hpEL.innerHTML = player.hp;
    modalScoreEL.innerHTML = player.points;
    scoreEL.innerHTML = player.points;
    ammoEL.innerHTML = player.ammo;
    bombsEL.innerHTML = player.bomb;
    
}

function checkhighScore(){
    if(player.points> localStorage.getItem('gameHighScore')){
        localStorage.setItem('gameHighScore', player.points)
        highScore = player.points;
        modalHighScoreEL.textContent =  highScore;
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

function spawnMob(){
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
        mobs.push(new Mob(x,y,radius,color,velocity))
    },time)
   
}

function spawnBuff(){
    setInterval(()=>{
        const x = Math.random()*canvas.width;
        const y = randomY(70,400);
        const radius = 5;
        buffs.push(new Buff(x,y,radius))
    },10000)
   
}

function animate(){
    
    animationID = requestAnimationFrame(animate);
    c.drawImage(background1,0,0,canvas.width,canvas.height)
    // c.fillStyle = 'white'
    // c.fillRect(0, 0, canvas.width, canvas.height);

    player.draw();//spawn one player
    

    particles.forEach((particle,indexx )=>{
        
        if(particle.alpha <=0){
            particles.splice(indexx, 1);
        }else{
            particle.update();
        }
    })
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
    //calculation on mobs, spawning them
    mobs.forEach((mob,index)=>{
        mob.update();
        if(mob.x>=canvas.width+mob.mobWidth){
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
        
        //spawn and delete shots from player
        attacks.forEach((attack, attackindex)=>{
            // if(dist - attack.radius - mob.radius < 1&& mob.radius>0){
                if(circleRect(attack.x,attack.y,attack.radius,mob.x,mob.y,mob.mobWidth*2,mob.mobHeight*2)===true){
                
                

                for(let i = 0; i <7;i++){
                    particles.push(new Particle(attack.x,attack.y,2,'orange',{
                        x: Math.random() - 0.5,
                        y: Math.random() - 0.5,
                    }))
                   
                }

                mob.hp=mob.hp-10;
                if(mob.hp<1){
                    player.points=player.points+10;
                    
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
        //spawn and delete buffs
        buffs.forEach((buff, buffindex)=>{
            buff.update();
            const dist2 = Math.hypot(buff.x - player.x, buff.y - player.y);

            if(circleRect(buff.x,buff.y,buff.radius,mob.x,mob.y,mob.mobWidth*2,mob.mobmobHeight*2)===true){
                buffs.splice(buffindex,1)
            }
            if(dist2 - buff.radius - player.radius < 1){
                player.ammo=player.ammo+20;
                player.bomb=player.bomb+4;
                ammoEL.innerHTML = player.ammo;
                bombsEL.innerHTML = player.bomb;
                buffs.splice(buffindex,1) 
            }
        }) 
         //spawn and delete bombs
        bombs.forEach((bomb, bombindex)=>{
            bomb.draw();

            if(circleRect(bomb.x,bomb.y,bomb.radius,mob.x,mob.y,mob.mobWidth*2,mob.mobHeight*2)===true){

                for(let i = 0; i <5;i++){
                    attacks.push(new Attack(
                        bomb.x,bomb.y,Math.random()*4,bomb.color,{
                            x: Math.random() - 0.5,
                            y: Math.random() - 0.5,
                        },5,
                    ));
                   
                    
                }
            
                mob.hp =mob.hp-40;
                if(mob.hp<=0){
                    player.points=player.points+10;
                    mobs.splice(index, 1)
                }
                bombs.splice(bombindex,1)
            }
        }) 
        
        //calculate hp of player
        if(circleRect(player.x,player.y,player.radius,mob.x,mob.y,mob.mobWidth*2,mob.mobHeight*2)===true){
            mob.hp=mob.hp-40;
            if(mob.hp<=0){
                mobs.splice(index, 1)
                player.color = 'red'
                setTimeout(()=>{
                    player.color = 'blue'
                },1000)
            }
            player.hp = player.hp-1;
            hpEL.innerHTML = player.hp;
            if(player.hp===0){
                cancelAnimationFrame(animationID);
                modalScoreEL.innerHTML = player.points
                modalEl.style.display = 'flex'

            }
            
        }

    })
   
}






window.addEventListener("keydown", event => player.keys[event.key.toLowerCase()] = true);
window.addEventListener("keyup", event => player.keys[event.key.toLowerCase()] = false);
window.addEventListener('click', event =>{

    ammoEL.innerHTML = player.ammo;
  
    var pos = getMousePos(canvas, event);

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
});

window.addEventListener('keydown', event =>{

    if (event.code === 'Space') {

    
    if(player.bomb>0){
        player.bomb = player.bomb-1;
        bombs.push(new Bomb(
            player.x,player.y,10,"yellow",
        ));
    }
    bombsEL.innerHTML = player.bomb;
}
});

startgameBtn.addEventListener('click', event =>{
    setTimeout(()=>{
        checkhighScore()
        init();
        animate();
        spawnBuff();
        spawnMob();
        modalEl.style.display = 'none'
    },100)
    
});