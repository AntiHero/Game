import $ from 'jquery';
import {task} from '../screens/task';
import {context} from '../screens/battle';
import {images} from '../screens/battle';

// import {square} from '../characters/char-parts'
// import {eye} from '../characters/char-parts';
// import {shark} from '../characters/char-parts';
// import {hero} from '../characters/char-parts';
import {mainHero} from '../screens/battle'
import {enemy} from '../screens/battle'
import {wasted} from '../screens/wasted';
import {mode} from '../screens/menu';
import win from '../screens/win';


export const score = {value: 0};


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
    let deltaDown = -0.01;

    let cvx = context.val;

    function fallRect() {
        if (x >= $(window).height()*0.61) {
            removeRect(1000).then(function(){
                console.log(enemy.val.damage, 'cube');
                $('.player_health_bar').css('background', 'linear-gradient(to right, ' + 'red ' + `${mainHero.val.health -= enemy.val.damage}` + '%,'  + 'transparent ' + `0` + '%)');
                if (mainHero.val.health <= 0) {
                    $('.start_btn').unbind('click', task);
                    wasted();
                } else {
                    $('.start_btn').bind('click', task);
                }
                //$('.start_btn').bind('click', task);
        });
            return 0;
        }
        $('.square').fadeIn();
        $('.square').css('top', `${x}`+'px');
        velocity += 0.3;
        x += velocity;
        requestAnimationFrame(fallRect);
    }
    

    // function rageRect() {

    //     opacity += delta;

    //     if (opacity < 0.0) {
    //         return 0;
    //     }


    //     if (opacity >= 1.0) {
    //         delta = -0.01;
    //     }

    //     cvx.globalAlpha = opacity;

    //     let rage = new Image();
    //     rage.src = '../../images/characters/square/square-rage.png';

    //     rage.onload = function(){
    //     cvx.drawImage(rage, 1404, 643);   
    //     }

    //     requestAnimationFrame(rageRect);
    // }
 
    // let yellowCube = new Image();
    // yellowCube.src = '../../images/characters/square/yellow-cube.png';

    // let greenCube = new Image();
    // greenCube.src = '../../images/characters/square/green-cube.png';

    // let cyanCube = new Image();
    // cyanCube.src = '../../images/characters/square/cyan-cube.png';

    // let purpleCube = new Image();
    // purpleCube.src = '../../images/characters/square/purple-cube.png';

    // yellowCube.onload = function(){
    //     cvx.drawImage(yellowCube, -100, -100);   
    // }

    // greenCube.onload = function(){
    //     cvx.drawImage(greenCube, -100, -100);   
    // }

    // purpleCube.onload = function(){
    //     cvx.drawImage(purpleCube, -100, -100);   
    // }

    // cyanCube.onload = function(){
    //     cvx.drawImage(cyanCube, -100, -100);   
    // }

    // let rage = new Image();
    // rage.src = '../../images/characters/square/square-rage.png';
    // let glasses = new Image();
    // glasses.src = square.accessory;
    let yCubeY = 820;//500;
    let gCubeY = 810//560;
    let pCubeY = 780//560;
    let cCubeY = 800;//620;

    let yCubeX = 1400;//1400;
    let gCubeX = 1280//1340;
    let pCubeX = 1320//1460;
    let cCubeX = 1350;//1400;

    let cubesAcc = 0.8;
    let flag = false;



    function fadeRectIn() {
        opacity0 += deltaUp;

        cvx.globalAlpha = 1;
        cvx.drawImage(images.background, 0, 0);
        cvx.drawImage(images.heroHead, 260, 551); 
        cvx.drawImage(images.heroBody, 150, 550); 
        cvx.drawImage(images.squareBody, 1400, 600);  


        // yCubeX += 0.5; 
        // gCubeX += 0.5; 
        // pCubeX += 0.5 
        // cCubeX += 0.5; 

        if (yCubeY >= 700 && flag === false) {
            
            yCubeY -= 1.2;
            gCubeY -= 1.5;
            pCubeY -= 1.3; 
            cCubeY -= 1.7;
        } else {
            flag = true;
            yCubeY += 1 + cubesAcc;
            gCubeY += 1 + cubesAcc;
            pCubeY += 1 + cubesAcc;
            cCubeY += 1 + cubesAcc; 
            cubesAcc += 1.1;
        }

        

        cvx.globalAlpha = opacity0;
        cvx.drawImage(images.yellowCube, yCubeX, yCubeY);
        cvx.drawImage(images.greenCube, gCubeX, gCubeY);  
        cvx.drawImage(images.purpleCube, pCubeX, pCubeY);  
        cvx.drawImage(images.cyanCube, cCubeX, cCubeY); 

             
        //cvx.drawImage(rage, 1404, 643);  

        // if (yCubeY >= 560) {
        //     //fadeRectOut();
        //     return new Promise (function(resolve, reject) {
        //         setTimeout(fadeRectOut, 1000);
        //         resolve('success');
        //     });
        // }

        if (cubesAcc >= 40) {
            cubesAcc = 0.5;

            //fallRect();
            return fallingRect();
        }
        
        if (cubesAcc < 40) {
            
            requestAnimationFrame(fadeRectIn);
        }    
    }

    let bigCube = new Image();
    bigCube.src = '../../images/characters/square/cube.png';

    bigCube.onload = function(){
        cvx.drawImage(bigCube, 300, 0);   
    }

    let bigCubeY = -300;

    function fallingRect() {
        cvx.drawImage(images.background, 0, 0);
        
        
        if (bigCubeY >-50) {
            cvx.drawImage(images.heroHeadAttacked, 260, 551);
        } else {
            cvx.drawImage(images.heroHead, 260, 551);
        }
        
        cvx.drawImage(images.heroBody, 150, 550); 
        cvx.drawImage(images.squareBody, 1400, 600); 
        cvx.drawImage(bigCube, 150, bigCubeY); 
   

        cubesAcc += 0.5;
        bigCubeY += cubesAcc;

        if (bigCubeY >= 530) {
            $('.player_health_bar').css('background', 'linear-gradient(to right, ' + 'red ' + `${mainHero.val.health -= enemy.val.damage}` + '%,'  + 'transparent ' + `0` + '%)');
                if (mainHero.val.health <= 0) {
                    $('.start_btn').unbind('click', task);
                    wasted();
                } else {
                    $('.start_btn').bind('click', task);
                }  
            return new Promise (function(resolve, reject) {
                setTimeout(fadeRectOut, 800);
                resolve('success');
            })
        } 

        if (bigCubeY < 530) {
            requestAnimationFrame(fallingRect);
        }

    }
    
    let fadeRectOutFlag = true;

    function fadeRectOut() {
        opacity1 -= 0.03;
 
        cvx.globalAlpha = 1;
        cvx.drawImage(images.background, 0, 0); 
        cvx.drawImage(images.heroHeadAttacked, 260, 551); 
        cvx.drawImage(images.heroBody, 150, 550); 
        cvx.drawImage(images.squareBody, 1400, 600); 
  

        cvx.globalAlpha = opacity1;
        cvx.drawImage(bigCube, 150, 526); 



        if (opacity1 <= 0.0) {   
            cvx.globalAlpha = 1; 
            cvx.drawImage(images.background, 0, 0); 
            cvx.drawImage(images.heroHead, 260, 551); 
            cvx.drawImage(images.heroBody, 150, 550); 
            cvx.drawImage(images.squareBody, 1400, 600); 

     
        }
        console.log('shit');
 
        if (opacity1 >= 0.0) {
            if (fadeRectOutFlag) {
                fadeRectOutFlag = false;
                
            }
            console.log('govno');
            requestAnimationFrame(fadeRectOut);
        }
    }
    fadeRectIn();
}

function sharkAttack(context) {


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
        context.drawImage(images.heroHeadAttacked2, 260, 551); 
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
            context.drawImage(images.leshenkoHit, x, y);
            context.setTransform(1,0,0,1,0,0);
              sharkAttackQueue().then(leshFadeOut).then(function() {
                setTimeout(() => {
                    context.drawImage(images.heroHead, 260, 551); 
                    context.drawImage(images.sharkBody, 1300, 600);
                    console.log(enemy.val.damage, 'shakr');
                    $('.player_health_bar').css('background', 'linear-gradient(to right, ' + 'red ' + `${mainHero.val.health -= enemy.val.damage}` + '%,'  + 'transparent ' + `0` + '%)');
                    if (mainHero.val.health <= 0) {
                        $('.start_btn').unbind('click', task);
                        wasted();
                    } else {
                        $('.start_btn').bind('click', task);
                    }
    
                }, 500); 
                
            });

            return 0;
        }

    }

    leshenkoHit();

    opacity = 1;
    function leshFadeOut() {
        console.log(opacity);
        

        context.globalAlpha = 1;
        context.drawImage(images.background, 0, 0); 
        context.drawImage(images.heroHeadAttacked2, 260, 551); 
        context.drawImage(images.heroBody, 150, 550); 
        context.drawImage(images.sharkBody2, 1300, 600);

        opacity -= 0.1;
        context.globalAlpha = opacity;
        context.drawImage(images.leshenkoHit2, 283, 555);

        if (opacity <= 0.0) {
            context.globalAlpha = 1;
            context.drawImage(images.background, 0, 0); 
            context.drawImage(images.heroHeadAttacked2, 260, 551); 
            context.drawImage(images.heroBody, 150, 550); 
            context.drawImage(images.sharkBody2, 1300, 600);
        }

        if (opacity > 0.0) {
            requestAnimationFrame(leshFadeOut);
        }
    }
    // function leshFadeOut() {
    //     opacity -= 0.01;

    //     context.globalAlpha = 1.0;
    //     context.setTransform(1,0,0,1,0,0);
    //     context.drawImage(images.background, 0, 0); 
    //     context.drawImage(images.heroHeadAttacked, 260, 551); 
    //     context.drawImage(images.heroBody, 150, 550); 
    //     context.drawImage(images.sharkBody, 1300, 600); 

    //     context.globalAlpha = opacity;
    //     console.log('blyeat');
    //     console.log(x);
    //     if (flag) {
    //         //context.translate(356, 556);
    //         context.rotate(24);
    //         context.drawImage(images.leshenkoHit, 266, 546); 
    //         //context.translate(-356, -556);
            
    //         flag = false;
    //     }
        
    //     context.drawImage(images.leshenkoHit, 266, 546); 

    //     if(opacity >= 0.9) {
    //         requestAnimationFrame(leshFadeOut);
    //     }

    //     if(opacity < 0.0) {
          
    //         return 0;
    //     }
    // }

    function sharkAttackQueue() {
        
        return new Promise (function(resolve, reject) {
            setTimeout(() => {
                context.drawImage(images.background, 0, 0); 
                context.drawImage(images.heroHeadAttacked2, 260, 551); 
                context.drawImage(images.heroBody, 150, 550); 
                context.drawImage(images.sharkBody2, 1300, 600);

                resolve('success');
            }, 1000);
        });
    }
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
            context.drawImage(images.heroHeadAttacked2, 260, 551); 
            gradient.addColorStop(0, colors[colorStart]);
            gradient.addColorStop(1, colors[colorEnd = Math.floor(Math.random()*(colors.length - 1))]);

            context.strokeStyle = colors[colorStart];
            context.beginPath();
            context.moveTo(1427, 686);
            context.lineTo(330, 686);
            context.lineWidth = 10;
            context.stroke();

            context.beginPath();
            context.fillStyle = colors[colorStart];
            context.arc(340, 686, 13, 0, 2*Math.PI, false);
            context.fill();

            eyeAttackRedraw(context).then(function() {
                context.drawImage(images.heroHead, 260, 551);
                context.drawImage(images.eyeEyes, 1400, 550);
                console.log(enemy.val.damage, 'eye');
                $('.player_health_bar').css('background', 'linear-gradient(to right, ' + 'red ' + `${mainHero.val.health -= enemy.val.damage}` + '%,'  + 'transparent ' + `0` + '%)');
                if (mainHero.val.health <= 0) {
                    $('.start_btn').unbind('click', task);
                    wasted();
                } else {
                    $('.start_btn').bind('click', task);
                }
                
            }).then(function() {
                setTimeout(function() {
                    context.drawImage(images.eyeBody, 1400, 550);
                },500);
            });           
        }

        if (radius < 20) {
            requestAnimationFrame(eyeShoot);
        }
    }
    eyeShoot();
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

                // score.value += 10;
                // $('.score').text(`Score: ${score.value}`);

            } else if (mode.value === 'medium') {
                context.drawImage(images.eyeBody, 1400, 550); 
                // $('.enemy_health_bar').css('background', 'linear-gradient(to left, ' + '#da2525 ' + '50%, ' + 'rgba(0,0,0,0) ' + '50%)');
                // score.value += 20;
                // $('.score').text(`Score: ${score.value}`);
  
            } else if (mode.value === 'hard'){
                context.drawImage(images.sharkBody, 1300, 600); 
                // score.value += 50;
                // $('.score').text(`Score: ${score.value}`);
   
            } else {
                context.drawImage(images.squareBody, 1400, 600); 
                // score.value += 10;
                // $('.score').text(`Score: ${score.value}`);
   
            }


            return 0;
        }
        
        if (opacity >= 0.0) {
            requestAnimationFrame(skilletFadeOut);
        }    
    }
    
    let y = 300;


    function drawSkillet() {
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

            }
            dropDown();

        } else {
            context.drawImage(images.squareBody, 1400, 600); 
        }
 
        y += 5;

        if (y >= 570) {
            fire().then(function() {
                setTimeout(function() {
                    context.drawImage(images.heroHead, 260, 551); 
                    if (mode.value === 'easy') {
                        context.drawImage(images.squareBody, 1400, 600); 
      
                        $('.enemy_health_bar').css('background', 'linear-gradient(to left, ' + 'red ' + `${enemy.val.health -= mainHero.val.damage}` + '%,'  + 'transparent ' + `0` + '%)');
                        score.value += 10;
                        $('.score').text(`Score: ${score.value}`);

                        if (enemy.val.health <= 0) {
                            win();
                        }
                    } else if (mode.value === 'medium') {
                        context.drawImage(images.eyeBody, 1400, 550); 
                        $('.enemy_health_bar').css('background', 'linear-gradient(to left, ' + 'red ' + `${enemy.val.health -= mainHero.val.damage}` + '%,'  + 'transparent ' + `0` + '%)');
                        score.value += 20;
                        $('.score').text(`Score: ${score.value}`);
                        if (enemy.val.health <= 0) {
                            win();
                        }
                    } else if (mode.value === 'hard'){
                        context.drawImage(images.sharkBody, 1300, 600);
                        $('.enemy_health_bar').css('background', 'linear-gradient(to left, ' + 'red ' + `${enemy.val.health -= mainHero.val.damage}` + '%,'  + 'transparent ' + `0` + '%)'); 
                        score.value += 50;
                        $('.score').text(`Score: ${score.value}`);
                        if (enemy.val.health <= 0) {
                            win();
                        }
                    } else {
                        context.drawImage(images.squareBody, 1400, 600); 
                        $('.enemy_health_bar').css('background', 'linear-gradient(to left, ' + 'red ' + `${enemy.val.health -= mainHero.val.damage}` + '%,'  + 'transparent ' + `0` + '%)');
                        score.value += 10;
                        $('.score').text(`Score: ${score.value}`);
                        if (enemy.val.health <= 0) {
                            win();
                        }
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
    // let fitzDmg = new Image();
    // fitzDmg.src = '../../images/characters/hero/hero-head-attacked.png';

    // fitzDmg.onload = function () {
    //     context.drawImage(fitzDmg, 260, 551);  
    // }     
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