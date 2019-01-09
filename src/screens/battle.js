import $ from 'jquery';
import {playerName} from './nickname';
import {task} from './task';
import {mode} from './menu';
import {map} from './menu';
import {Char} from '../characters/char';
import {square} from '../characters/char-parts';
import {eye} from '../characters/char-parts';
import {shark} from '../characters/char-parts';
import {hero} from '../characters/char-parts';
import {score} from '../characters/animation'
import {cubes} from '../characters/char-parts';


export const context = {val:''};
export const enemy = {val: ''};
export const mainHero = {val: ''};

export const images = {background: '',heroHead:'', heroHeadmad: '',heroHeadAttacked: '',heroHeadAttacked: '', heroBody: '', heroHand: '', squareBody: '', squareMouth: '', eyeBody: '',
eyeMouth: '',eyeEyes: '',sharkBody: '',sharkBody2: '', sharkEye:'', drop:'', leshenko: '', leshenkoHit:'', leshenkoHit2:'', skillet: '', fire: '', hole: '', yellowCube: '', purpleCube: '', greenCube: '',
cyanCube: ''};

let names = ['mad', 'great', 'hunny', 'angry', 'humble'];

let count = 2;
let cvx;

let i_0 = 0;
let i_1 = 0;
let i_2 = 0;

export function battle() {
    i_0 = 0;
    i_1 = 0;
    i_2 = 0;

    $('.menu').remove();
        
    setPlayersAttr();

    let cvs = document.querySelector('canvas');
    cvs.width = window.innerWidth//1914;
    cvs.height = window.innerHeight;//890;
    
    cvx = cvs.getContext('2d');
    context.val = cvx;
    cvx.clearRect(0, 0, cvs.width, cvs.height);
    console.log(mode.value);

    // BACKGROUND
    cvx.globalAlpha = 0.2;
    let background = new Image();

    background.onload = function(){
    cvx.drawImage(background,0,0);   
    }

    if (map.value === "default") {
        background.src = './images/backgrounds/background-city.png';
    } else if (map.value === "sunny") {
        background.src = './images/backgrounds/background-sunny.png';
    } else if (map.value === "imaguru") {
        background.src = './images/backgrounds/background-imaguru.png';
    } else {
        background.src = './images/backgrounds/background-city.png';
    }
    
    
    images.background = background;

    cvx.globalAlpha = 0.5;
    background.onload = function(){
    cvx.drawImage(background,0,0);   
    }

    //cvx.globalAlpha = 1;

    cvx.globalAlpha = 0.5;
    let initDtlsInt = setInterval(function() {
        i_0++;
        if (i_0 == 2) {
            clearInterval(initDtlsInt);
        }
        initDetails(cvx);
        cvx.globalAlpha = 1.0;
    }, 60);  


    cvx.globalAlpha = 0.5;
    let initFightInt = setInterval(function() {
        i_1++;
        if (i_1 == 2) {
            clearInterval(initFightInt);
        }
        initFight(cvx);
        cvx.globalAlpha = 1.0;
    }, 60);   
    
    cvx.globalAlpha = 0.5;
    let initHeroInt = setInterval(function() {
        i_2++
        if (i_2 == 2) {
            clearInterval(initHeroInt);
        }
        initHero(cvx);
        cvx.globalAlpha = 1.0;
    }, 60);  

    
    cvx.globalAlpha = 1.0;

    //init(cvx);
    //drawBackground(cvx);

    
    // let mainChar = new Image();
    // mainChar.src = '../../images/characters/main_character.png';

    // mainChar.onload = function(){
    //     cvx.drawImage(mainChar,150,550);   
    // }

    //setChars();
    // let rage = new Image();
    // rage.src = '../../images/characters/square/square-rage.png';

    // rage.onload = function() {
    //     cvx.drawImage(rage, 1420, 648);
    // }
        
    setChars();
    //drawSquare();
    $('.battle_canvas').fadeTo(3500,1,startBattle());
    //drawSkillet();  
}

function startBattle() {
    $('.start_btn').on("click", task);
}

function setPlayersAttr() {
    let name = names[Math.floor(Math.random()*names.length)];

    if (mode.value === "easy") {
        name += ' square';
    } else if (mode.value === "medium") {
        name += ' eye';
    } else {
        name += ' shark';
    }

    let mainName = `<div class="player_name"></div>`;
    let enemyName =  `<div class="enemy_name">${name}</div>`;
    let playerHealthBar = `<div class="player_health_bar"></div>`;
    let enemyHealthBar = `<div class="enemy_health_bar"></div>`;
    let startBtn = `<div class="start_btn">attack</div>`;
    let battle = `
    <canvas class="battle_canvas"></canvas>
    `;
    let scoretab = `<div class="score">Score: ${score.value}</div>`
    $('body').prepend(startBtn);
    $('body').prepend(mainName);
    $('body').prepend(enemyName);
    $('body').prepend(playerHealthBar);
    $('body').prepend(enemyHealthBar);
    $('body').prepend(scoretab);
    $('body').prepend(battle);
    $('.player_name').prepend(playerName.name);
}

function setChars() {
    if (mode.value === 'easy') {
        enemy.val = new Char('Square', 100, 10, square);
        
    } else if (mode.value === 'medium') {
        enemy.val = new Char('Eye', 100, 20, eye);
    } else {
        enemy.val = new Char('Shark', 100, 40, shark);
    }
    mainHero.val = new Char('Fitz', 100, 10, hero);
}



export function addImageProcess(char, x, y){
    return new Promise((resolve, reject) => {
      let charImg = new Image();
      charImg.src = char;
      
      charImg.onload = () => resolve(cvx.drawImage(charImg, x, y));
      charImg.onerror = reject('image not loaded');
    });
  }

function drawSquare() {
    let square = `<div class="square">
        <div class="square_side_1"></div>
        <div class="square_side_2"></div>
        <div class="square_side_3"></div>
    </div>`;
    $('body').append(square);
}


function initFight(context) {

    if (mode.value === 'easy') {
        //SQUARE
        let squareBody = new Image();
        squareBody.src = square.body;

        images.squareBody = squareBody;

        squareBody.onload = function () {
        context.drawImage(squareBody, 1400, 600); 
        }  

        // squareBody.onload = function () {
        // context.drawImage(squareBody, 1400, 600); 
        // }  
        // CUBES
        let yellowCube = new Image();
        yellowCube.src = cubes.yellow;
        images.yellowCube = yellowCube;
        yellowCube.onload = function () {
        context.drawImage(yellowCube, -100, -100);  
        }
    
        
    
        let greenCube = new Image();
        greenCube.src = cubes.green;
        images.greenCube = greenCube;
        greenCube.onload = function () {
        context.drawImage(greenCube,  -100, -100);  
        }
    
        
    
        let purpleCube = new Image();
        purpleCube.src = cubes.purple;
        images.purpleCube = purpleCube;
        purpleCube.onload = function () {
        context.drawImage(purpleCube, -100, -100);  
        }

    
        let cyanCube = new Image();
        cyanCube.src = cubes.cyan;
        images.cyanCube = cyanCube;
        cyanCube.onload = function () {
        context.drawImage(cyanCube, -100, -100);  
        }
        

        //SQUARE MOUTH ATTACKED
        let squareMouth = new Image();
        squareMouth.src = square.mouth;

        images.squareMouth = squareMouth;

        squareMouth.onload = function () {
        context.drawImage(squareMouth, -100, -100);  
        }  
    }

    if (mode.value === 'medium') {
        //EYE
        let eyeBody = new Image();

        eyeBody.onload = function () {
        context.drawImage(eyeBody, 1400, 550); 
        }
       
        eyeBody.src = eye.body;

        eyeBody.onload = function () {
        context.drawImage(eyeBody, 1400, 550); 
        }

        images.eyeBody = eyeBody;

        //EYE MOUTH ATTACKED
        let eyeMouth = new Image();
        eyeMouth.src = eye.mouth;

        images.eyeMouth = eyeMouth;

        eyeMouth.onload = function () {
        context.drawImage(eyeMouth, -100, -100);  
        }  

        //EYE EYES ATTACKED
        let eyeEyes = new Image();
        eyeEyes.src = eye.eyes;

        images.eyeEyes = eyeEyes;

        eyeEyes.onload = function () {
        context.drawImage(eyeEyes, -300, -300);  
        }  
    }
    
    if (mode.value === 'hard') {

        //SHARK BODY
        let sharkBody = new Image();
        sharkBody.src = shark.body;

        sharkBody.onload = function () {
        context.drawImage(sharkBody, 1300, 600);  
        }  

        images.sharkBody = sharkBody;

        sharkBody.onload = function () {
        context.drawImage(sharkBody, 1300, 600);  
        }  


        //SHARK EYE
        let sharkEye = new Image();
        sharkEye.src = shark.eyes;

        images.sharkEye = sharkEye;

        sharkEye.onload = function () {
        context.drawImage(sharkEye, -100, -100);  
        } 

         //DROP
         let drop = new Image();
         drop.src = shark.accessory;
 
         images.drop = drop;
 
         drop.onload = function () {
         context.drawImage(drop, -100, -100);  
         } 

         //LESHENKO
         let leshenko = new Image();
         leshenko.src = shark.weapon;
 
         images.leshenko = leshenko;
 
         leshenko.onload = function () {
         context.drawImage(leshenko, -200, -200);  
         } 

         //LESHENKO HIT
         let leshenkoHit = new Image();
         leshenkoHit.src = shark.weapon2;
 
         images.leshenkoHit = leshenkoHit;
 
         leshenkoHit.onload = function () {
         context.drawImage(leshenkoHit, -200, -200);  
         } 

          //LESHENKO HIT
          let leshenkoHit2 = new Image();
          leshenkoHit2.src = '../../images/characters/shark/leshenko2.png';
  
          images.leshenkoHit2 = leshenkoHit2;
  
          leshenkoHit2.onload = function () {
          context.drawImage(leshenkoHit2, -200, -200);  
          } 
    }
    
    console.log(i_2);
}
   

function initHero(context) {
    // FITZ BODY
    let heroBody = new Image();
    heroBody.src = hero.body;
    heroBody.onload = function () {
        context.drawImage(heroBody, 150, 550);  
    }  


    images.heroBody = heroBody;

    

    // FITZ HEAD
    let heroHead = new Image();
    heroHead.src = hero.head;

    heroHead.onload = function () {
        context.drawImage(heroHead, 260, 551);  
    } 

    images.heroHead = heroHead;

}


function initDetails(context) {
    // FITZ HAND
    let heroHand = new Image();
    heroHand.src = '../../images/characters/hero/hero-hand.png';

    images.heroHand = heroHand;

    heroHand.onload = function () {
    context.drawImage(heroHand, -100, -100);  
    }  

    // SKILLET'S GUN FIRE
    let fire = new Image();
    fire.src = '../../images/characters/hero/weapon/fire.png';

    images.fire = fire;
    
    fire.onload = function () {
        context.drawImage(fire, -100, -100);  
    }  

    // HOLE
    let hole = new Image();
    hole.src = '../../images/characters/additional/hole.png';

    images.hole = hole;
    
    hole.onload = function () {
        context.drawImage(hole, -100, -100);  
    }  
 
    // SKILLET
    let skillet = new Image();
    skillet.src = '../../images/characters/hero/weapon/skillet.png';

    images.skillet = skillet;

    skillet.onload = function () {
        context.drawImage(skillet, -100, -100);  
    }  

    // FITZ MAD HEAD
    let heroHeadMad = new Image();
    heroHeadMad.src = '../../images/characters/hero/hero-head-attack.png';

    images.heroHeadMad = heroHeadMad;

    heroHeadMad.onload = function () {
        context.drawImage(heroHeadMad, -100, -100);  
    }  

    // FITZ ATTACKED HEAD
    let heroHeadAttacked = new Image();
    heroHeadAttacked.src = '../../images/characters/hero/hero-head-attacked.png';

    images.heroHeadAttacked = heroHeadAttacked;

    heroHeadAttacked.onload = function () {
        context.drawImage(heroHeadAttacked, -100, -100);  
    } 

    // FITZ ATTACKED HEAD
    let heroHeadAttacked2 = new Image();
    heroHeadAttacked2.src = '../../images/characters/hero/hero-head-attacked2.png';

    images.heroHeadAttacked2 = heroHeadAttacked2;

    heroHeadAttacked2.onload = function () {
        context.drawImage(heroHeadAttacked2, -100, -100);  
    } 

    //SHARK BODY2
    let sharkBody2 = new Image();
    sharkBody2.onload = function () {
    context.drawImage(sharkBody2, -500, -500);  
    }

    sharkBody2.src = shark.body2;

    images.sharkBody2 = sharkBody2;

    

    console.log(i_1);
}

function wrapper() {
    return new Promise(function(resolve, reject) {
        resolve(context.val);
        reject('image not loaded');
    })
}
