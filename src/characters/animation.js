import $ from 'jquery';
import {task} from '../screens/task';
import {context} from '../screens/battle';
import {addImageProcess} from '../screens/battle';
import {images} from '../screens/battle';

import {square} from '../characters/char-parts'
import {eye} from '../characters/char-parts';
import {shark} from '../characters/char-parts';
import {hero} from '../characters/char-parts';
import {mode} from '../screens/menu';

let requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitCancelAnimationFrame ||
                            window.msRequestAnimationFrame;

export function attack(name, context) {
    if (name === 'Square') {
        squareAttack(context);
    } else if (name === 'Eye') {
        eyeAttack(context);
    } else if (name === 'Shark') {
        sharkAttack(context)
    } else if (name === 'Fitz') {
        fitzAttack(context);
    }
    else {
        squareAttack(context);
    }
}

export function damaged(name, context) {
    if (name === 'Square') {
        squareDmg(context);
    } else if (name === 'Eye') {
        eyeDmg(context);
    } else if (name === 'Shark') {
        sharkDmg(context)
    } else if (name === 'Fitz') {
        fitzDmg(context);
    }
    else {
        squareDmg(context);
        
    }
}

function squareAttack() {
    let x = -$(window).height()*0.4;
    let y = 50;

    let velocity = 1;
    
    let opacity0 = 0.0;
    let opacity1 = 1.0;
    let deltaUp = 0.02;
    let deltaDown = -0.1;

    let cvx = context.val;

    function fallRect() {
        if (x >= $(window).height()*0.61) {
            removeRect(1000).then(function(){
                $('.start_btn').bind('click', task);
        });
            return 0;
        }
        $('.square').fadeIn();
        $('.square').css('top', `${x}`+'px');
        velocity += 0.3;
        x += velocity;
        requestAnimationFrame(fallRect);
    }
    

    function rageRect() {

        opacity += delta;

        if (opacity < 0.0) {
            console.log(opacity +'delta 0.01')
            // let glasses = new Image();
            // glasses.src = square.accessory;

            // glasses.onload = function(){
            // cvx.drawImage(glasses, 1405, 645);   
            // }
            return 0;
        }


        if (opacity >= 1.0) {
            delta = -0.01;
            console.log(opacity +'delta -0.01')
            // let glasses = new Image();
            // glasses.src = square.accessory;

            // glasses.onload = function(){
            // cvx.drawImage(glasses, 1405, 645);   
            // }
        }
        // if(opacity < 0) {
        //    
        // } else {
        //     if (opacity >= 0.99) {
        //         let glasses = new Image();
        //         glasses.src = square.accessory;

        //         glasses.onload = function(){
        //         cvx.drawImage(glasses, 1405, 645);   
        //         }

        //         delta = -0.01
        //     }
            
        // }

        // let rage = new Image();
        // rage.src = '../../images/characters/square/square-rage.png';
        
        // rage.onload = function(){
        //     cvx.drawImage(rage, 1420, 650);   
        // }
        cvx.globalAlpha = opacity;

    
        let rage = new Image();
        rage.src = '../../images/characters/square/square-rage.png';

        rage.onload = function(){
        cvx.drawImage(rage, 1425, 645);   
        }
        
        // cvx.beginPath();
        // cvx.moveTo(1426, 653);
        // cvx.lineTo(1422, 668);
        // cvx.lineTo(1428, 663);
        // cvx.lineTo(1424, 686);
        // cvx.lineWidth = 3;
        // cvx.strokeStyle = '#ff0000';
        // //cvx.closePath();
        // cvx.stroke();

        
        // cvx.beginPath();
        // cvx.moveTo(1496, 655);
        // cvx.lineTo(1492, 675);
        // cvx.lineTo(1500, 670);
        // cvx.lineTo(1495, 690);
        // cvx.lineWidth = 3;
        // cvx.strokeStyle = '#ff0000';
        // cvx.stroke();
        // cvx.beginPath();
        // cvx.moveTo(120, 650);
        // cvx.lineTo(1420, 550);
        // //cvx.lineTo(1410, 550);
        // cvx.lineWidth = 2;
        // cvx.fill();
        // 
        // cvx.stroke

        requestAnimationFrame(rageRect);
    }
    console.log(context.val.globalAlpha);
    //$('.square_rage').fadeTo(1000, 1)//.fadeTo(1000,0, fallRect);
    //rageRect();
    let rage = new Image();
    rage.src = '../../images/characters/square/square-rage.png';
    let glasses = new Image();
    glasses.src = square.accessory;

    function fadeRectIn() {
        console.log('in');
        opacity0 += deltaUp;


        cvx.globalAlpha = opacity0;
        cvx.drawImage(rage, 1420, 648);  

        // cvx.beginPath();
        // cvx.moveTo(1426, 653);
        // cvx.lineTo(1422, 668);
        // cvx.lineTo(1428, 663);
        // cvx.lineTo(1424, 686);
        // cvx.lineWidth = 3;
        // cvx.strokeStyle = '#ff0000';
        // //cvx.closePath();
        // cvx.stroke();

        if (opacity0 >= 1.0) {        
            console.log('out');
            // let glasses = new Image();
            // glasses.src = square.accessory;

            // glasses.onload = function () {
            //     cvx.drawImage(glasses, 1405, 645);  
            // } 
            
            
            return fadeRectOut();
        }
        
         
        // rage.onload = function(){
        
        // }
        // cvx.beginPath();
        // cvx.moveTo(1426, 653);
        // cvx.lineTo(1422, 668);
        // cvx.lineTo(1428, 663);
        // cvx.lineTo(1424, 686);
        // cvx.lineWidth = 3;
        // cvx.strokeStyle = '#ff0000';
        // cvx.stroke();
        if (opacity0 < 1) {
            requestAnimationFrame(fadeRectIn);
        }
        
    }
    
    function fadeRectOut() {
        opacity1 += deltaDown;
        
        cvx.globalAlpha = opacity1;

        cvx.drawImage(glasses, 1404, 643); 
        cvx.drawImage(rage, 1420, 648);   

        if (opacity1 <= 0.0) {        
            let glasses = new Image();
            glasses.src = square.accessory;
            cvx.globalAlpha = 1;
            glasses.onload = function () {
                cvx.drawImage(glasses, 1404, 643);  
            }      
            fitzDmg(cvx);
            return fallRect();
        }
        
        // rage.onload = function(){
        
        // }
        // cvx.beginPath();
        // cvx.moveTo(1426, 653);
        // cvx.lineTo(1422, 668);
        // cvx.lineTo(1428, 663);
        // cvx.lineTo(1424, 686);
        // cvx.lineWidth = 3;
        // cvx.strokeStyle = '#ff0000';
        // cvx.stroke();
        if (opacity1 >= 0.0) {
            requestAnimationFrame(fadeRectOut);
        }
        
    }

    // let rage = new Image();
    // rage.src = '../../images/characters/square/square-rage.png';
    // rage.onload = function(){
    // cvx.drawImage(rage, 1420, 647);  
    // } 
    //fadeRectIn();
    fadeRectIn();
    console.log(cvx.globalAlpha);
    
    
    //fallRect(context, 50, 50);
    console.log('square attack');
}

function sharkAttack(context) {
    console.log('shark attacks');

    

    setTimeout(function() {
        context.drawImage(images.sharkBody2, 1300, 600);
    }, 50);
    let x = 522;//285;
    let y = 870;//555;

    let flag = true;
    
    let degree = 66;
    let rad = 0;
    let opacity = 1.0;

    function leshenkoHit() {
        x -= 5.8;
        y -= 6.8;

        rad = degree * Math.PI / 180;
        degree += 30;

        context.setTransform(1,0,0,1,0,0);
        context.drawImage(images.background, 0, 0); 
        context.drawImage(images.heroHeadAttacked, 260, 551); 
        context.drawImage(images.heroBody, 150, 550); 
        context.drawImage(images.sharkBody2, 1300, 600);


        context.translate(x + 100, y + 40);
        context.rotate(rad);
        context.translate(-x - 100, -y - 40);
        context.drawImage(images.leshenko, x, y); 
        console.log(x, y, rad);
        if (x > 250 ) {
            requestAnimationFrame(leshenkoHit);
        }

        if (x <= 250) {
            console.log('hi');
            context.drawImage(images.leshenkoHit, x, y);
            context.setTransform(1,0,0,1,0,0);
              sharkAttackQueue().then(function() {
                setTimeout(() => {
                    context.drawImage(images.heroHead, 260, 551); 
                    context.drawImage(images.sharkBody, 1300, 600);
                    $('.start_btn').bind('click', task);
                }, 500); 
                
            });
            //leshFadeOut();
            return 0;

            //leshFadeOut(x, y, rad);
        }
        console.log(x);

    }

    leshenkoHit();

    
    function leshFadeOut() {
        opacity -= 0.01;

        context.globalAlpha = 1.0;
        context.setTransform(1,0,0,1,0,0);
        context.drawImage(images.background, 0, 0); 
        context.drawImage(images.heroHeadAttacked, 260, 551); 
        context.drawImage(images.heroBody, 150, 550); 
        context.drawImage(images.sharkBody, 1300, 600); 

        context.globalAlpha = opacity;
        console.log('blyeat');
        console.log(x);
        if (flag) {
            //context.translate(356, 556);
            context.rotate(24);
            context.drawImage(images.leshenkoHit, 266, 546); 
            //context.translate(-356, -556);
            
            flag = false;
        }
        
        context.drawImage(images.leshenkoHit, 266, 546); 

        if(opacity >= 0.9) {
            requestAnimationFrame(leshFadeOut);
        }

        if(opacity < 0.0) {
          
            return 0;
        }
    }

    function sharkAttackQueue() {
        
        return new Promise (function(resolve, reject) {
            setTimeout(() => {
                context.drawImage(images.background, 0, 0); 
                context.drawImage(images.heroHeadAttacked, 260, 551); 
                context.drawImage(images.heroBody, 150, 550); 
                context.drawImage(images.sharkBody2, 1300, 600);

                //context.drawImage(images.leshenko, 285, 555); 
                resolve('success');
            }, 1000);
        });
    }
    // sharkAttackQueue();
    // sharkAttackQueue().then(result => console.log(result)).then(function(){
    //     setTimeout(function() {
    //         context.drawImage(images.background, 0, 0);        
    //         context.drawImage(images.heroBody, 150, 550);
    //         context.drawImage(images.heroHeadAttacked, 260, 551); 
    //         context.drawImage(images.sharkBody2, 1300, 600); 
    //         leshFadeOut();
    //     },1000)
    // });


}

function eyeAttack(context) {
    console.log('eyeAttacks');


    let radius = 1;
    let colors = ['#66ff33', '#0066ff', '#ff33bb', '#ffff00', '#ff3300'];
    let colorStart = 0;//= colors[Math.floor(Math.random()*(colors.length - 1))];
    let colorEnd = 0;
    let gradient = context.createLinearGradient(1427, 686, 330, 686);
    // let opacity = 0.9
    // gradient.addColorStop(`${opacity}`, colors[0]);
    // gradient.addColorStop(`${opacity}`, colors[1]);
    // gradient.addColorStop(`${opacity}`, colors[2]);
    // gradient.addColorStop(`${opacity}`, colors[3]);
    // gradient.addColorStop(`${opacity}`, colors[4]);

    function eyeShoot() {
        context.fillStyle = colors[colorStart = Math.floor(Math.random()*(colors.length - 1))];
        // let red = Math.floor(Math.random()*(255 - 0));
        // let blue = Math.floor(Math.random()*(255 - 0));
        // let green = Math.floor(Math.random()*(255 - 0));
        // context.fillStyle = `rgb(${red}, ${blue}, ${green}`;
        context.beginPath();
        context.arc(1427, 686, radius, 0, 2*Math.PI, false);
        context.fill();

        radius += 0.3;
        if (radius >= 20) {
            //let opacity = 0.9
            context.drawImage(images.heroHeadAttacked2, 260, 551); 
            gradient.addColorStop(0, colors[colorStart]);
            gradient.addColorStop(1, colors[colorEnd = Math.floor(Math.random()*(colors.length - 1))]);

            context.strokeStyle = colors[colorStart];//gradient;//colors[color];
            context.beginPath();
            context.moveTo(1427, 686);
            context.lineTo(330, 686);
            context.lineWidth = 10;
            context.stroke();

            context.beginPath();
            context.fillStyle = colors[colorStart];//colors[colorEnd];
            context.arc(340, 686, 13, 0, 2*Math.PI, false);
            context.fill();

            // setTimeout(function() {
            //     context.drawImage(images.background, 0, 0);        
            //     context.drawImage(images.heroBody, 150, 550);
            //     context.drawImage(images.heroHeadAttacked, 260, 551); 
            //     context.drawImage(images.eyeBody, 1400, 550); 
            // }, 500)
            eyeAttackRedraw(context).then(function() {
                // setTimeout(function() {
                //     
                // }, 300);
                context.drawImage(images.heroHead, 260, 551);
                $('.start_btn').bind('click', task);
            });
            // eyeAttackRedraw(context).then(function(context) {
            //     setTimeout(function(){
            //         
            //         alert('hello');
            //     }, 1000);
            //     //
            // });
            // eyeAttackRedraw(context).then(function(context) {
            //     setTimeout(function () {
            //         
            //     }, 1000);
            // }).catch(error => console.log(error));
            
            
        }

        if (radius < 20) {
            requestAnimationFrame(eyeShoot);
        }
    }
    eyeShoot();
    console.log(colorStart, colorEnd);
    
   
    
}

function fitzAttack(context) {
    let opacity = 1;
    let dropY = 630;

    function skilletFadeOut() {
        opacity += -0.01;
            
        
        context.globalAlpha = 1.0;
        context.drawImage(images.background, 0, 0); 
        context.drawImage(images.heroHead, 260, 551); 
        context.drawImage(images.heroBody, 150, 550); 

        context.globalAlpha = opacity;
        context.drawImage(images.skillet, 300, 565);

        context.globalAlpha = 1.0;
        context.drawImage(images.heroHand, 310, 627); 
        if (mode.value === 'easy') {
            context.drawImage(images.squareBody, 1400, 600); 
        } else if (mode.value === 'medium') {
            context.drawImage(images.eyeBody, 1400, 550); 
        } else if (mode.value === 'hard') {
            context.drawImage(images.sharkBody, 1300, 600); 
        } else {
            context.drawImage(images.squareBody, 1400, 600); 
        }
        
        

        if (opacity <= 0.0) { 
            context.globalAlpha = 1.0;
            context.drawImage(images.background, 0, 0);        
            context.drawImage(images.heroHead, 260, 551);
            context.drawImage(images.heroBody, 150, 550);
            context.drawImage(images.heroHand, 310, 627);
            if (mode.value === 'easy') {
                context.drawImage(images.squareBody, 1400, 600); 
            } else if (mode.value === 'medium') {
                context.drawImage(images.eyeBody, 1400, 550); 
            } else if (mode.value === 'hard'){
                context.drawImage(images.sharkBody, 1300, 600); 
            } else {
                context.drawImage(images.squareBody, 1400, 600); 
            }
            //context.drawImage(images.squareBody, 1400, 600);   

            return 0;
        }
        
        if (opacity >= 0.0) {
            requestAnimationFrame(skilletFadeOut);
        }    
    }
    

        // let background = new Image();
        // background.src = '../../images/backgrounds/background-city.png';
        
        // background.onload = function () {
        //     context.drawImage(background, 0, 0);  
        // }  

        // let heroBody = new Image();
        // heroBody.src = hero.body;

        // heroBody.onload = function () {
        //     context.drawImage(heroBody, 150, 550);  
        // }  

        // let heroHand = new Image();
        // heroHand.src = '../../images/characters/hero/hero-hand.png';

        // heroHand.onload = function () {
        //     context.drawImage(heroHand, 150, 550);  
        // }  

        // let heroHead = new Image();
        // heroHead.src = '../../images/characters/hero/hero-head-attack.png';

        // heroHead.onload = function () {
        //     context.drawImage(heroHead, 260, 551);  
        // }  

        // let skillet = new Image();
        // skillet.src = '../../images/characters/hero/weapon/skillet.png';

        // skillet.onload = function () {
        //     context.drawImage(skillet, 300, y);  
        // }  

        // let squareBody = new Image();
        // squareBody.src = square.body;

        // squareBody.onload = function () {
        //     context.drawImage(squareBody, 1400, 600);  
        // }  


    let y = 300;


    function drawSkillet() {

        // addImageProcess(hero.body, 150, 550).catch(error => console.log(error));
        // addImageProcess('../../images/characters/hero/hero-head-attack.png', 260, 551).catch(error => console.log(error));
        context.drawImage(images.background, 0, 0);  
        context.drawImage(images.heroHeadMad, 260, 551); 
        context.drawImage(images.heroBody, 150, 550);    
        context.drawImage(images.skillet, 300, y); 
        context.drawImage(images.heroHand, 310, 627); 
        if (mode.value === 'easy') {
            context.drawImage(images.squareBody, 1400, 600); 
        } else if (mode.value === 'medium') {
            context.drawImage(images.eyeBody, 1400, 550); 
        } else if (mode.value === 'hard'){
            context.drawImage(images.sharkBody, 1300, 600); 
            context.drawImage(images.drop, 1340, 630); 
            function dropDown() {
                dropY += 0.02;
                context.drawImage(images.sharkBody, 1300, 600);
                context.drawImage(images.drop, 1340, dropY);  

                if (dropY < 650) {
                    requestAnimationFrame(dropDown);
                }
                //context.drawImage(images.sharkEye, 1352, 685); 
            }
            dropDown();
            //context.drawImage(images.sharkEye, 1352, 685); 
        } else {
            context.drawImage(images.squareBody, 1400, 600); 
        }
        //context.drawImage(images.squareBody, 1400, 600); 
        //context.drawImage(images.squareMouth, 1450, 717);    
        
        y += 5;

        if (y >= 570) {
            fire().then(function() {
                setTimeout(function() {
                    context.drawImage(images.heroHead, 260, 551); 
                    if (mode.value === 'easy') {
                        context.drawImage(images.squareBody, 1400, 600); 
                    } else if (mode.value === 'medium') {
                        context.drawImage(images.eyeBody, 1400, 550); 
                    } else if (mode.value === 'hard'){
                        context.drawImage(images.sharkBody, 1300, 600); 
                        //context.drawImage(images.drop, 1340, 630); 
                        //context.drawImage(images.sharkEye, 1352, 685); 
                    } else {
                        context.drawImage(images.squareBody, 1400, 600); 
                    }
                   
                    skilletFadeOut();
                    $('.start_btn').bind('click', task);
                }, 700);
            });
        }

        if (y < 570) {
            requestAnimationFrame(drawSkillet);
        }

        
    }

    drawSkillet();

    function fire() {

        let fire = setInterval(function() {
            skilletAttack(1400 + Math.floor(Math.random()*(45 - 10) + 10), 600 + Math.floor(Math.random()*(45 - 10) + 10));
        }, 100);
        return new Promise (function(resolve, reject) {
            setTimeout(function(){
                clearInterval(fire);
                resolve('success');
            }, 500);
        });
    }
}

function squareDmg(context) {
    console.log('square damaged 1');
    context.fillStyle = ''
}

function sharkDmg(context) {
    context.fillStyle = ''
}

function eyeDmg(context) {
    context.fillStyle = ''
}

function fitzDmg(context) {
    let fitzDmg = new Image();
    fitzDmg.src = '../../images/characters/hero/hero-head-attacked.png';

    fitzDmg.onload = function () {
        context.drawImage(fitzDmg, 260, 551);  
    }     
    //context.drawImage(hero.heroHeadAttacked, 260, 551);
}


// let removeRect = new Promise ((resolve, reject) => {
//     setTimeout(() => resolve('here'), 3500);
// });
// Rectangular attack helper functions //


function removeRect(delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve($('.square').fadeOut(1000, function () {
                let fitzHead = new Image();
                fitzHead.src = '../../images/characters/hero/hero-head.png';

                fitzHead.onload = function () {
                context.val.drawImage(fitzHead, 260, 551);  
            }   
            }));
        }, delay);
    });
}

function skilletAttack(x, y) {
    context.val.drawImage(images.fire, 410, 605);
    context.val.drawImage(images.hole, x , y); 
    //context.val.drawImage(images.hole, x + Math.floor(Math.random()*(5 - 2)), y + + Math.floor(Math.random()*(20 - 15))); 
    setTimeout(function() {
        context.val.drawImage(images.background, 0, 0);  
        context.val.drawImage(images.heroHeadMad, 260, 551); 
        context.val.drawImage(images.heroBody, 150, 550);    
        context.val.drawImage(images.skillet, 300, 565); 
        context.val.drawImage(images.heroHand, 310, 627);
        if (mode.value === 'easy') {
            context.val.drawImage(images.squareBody, 1400, 600); 
            context.val.drawImage(images.squareMouth, 1450, 717);  
        } else if (mode.value === 'medium') {
            context.val.drawImage(images.eyeEyes, 1400, 550); 
            context.val.drawImage(images.eyeMouth, 1448, 730); 
        } else if (mode.value === 'hard'){
            console.log('here');
            context.val.drawImage(images.sharkBody, 1300, 600); 
            //context.val.drawImage(images.drop, 1340, 630); 
            //context.val.drawImage(images.sharkEye, 1352, 685); 
        } else {
            context.drawImage(images.squareBody, 1400, 600); 
        }
         
    }, 50);
}


function eyeAttackRedraw(context) {
    return new Promise (function(resolve, reject) {
        setTimeout(function () {
            context.drawImage(images.background, 0, 0);        
            context.drawImage(images.heroBody, 150, 550);
            context.drawImage(images.heroHeadAttacked2, 260, 551); 
            //context.drawImage(images.heroHeadAttacked, 260, 551); 
            context.drawImage(images.eyeBody, 1400, 550);
            resolve('success'); 
        }, 500);
        //reject('error'); 
    }); 
}