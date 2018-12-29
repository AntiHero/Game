import $ from 'jquery';
import {playerName} from './nickname';
import {task} from './task';
import {Char} from '../characters/char';

export function battle() {
  $('.menu').remove();
    
  setPlayersAttr();

  let cvs = document.querySelector('canvas');
  cvs.width = window.innerWidth//1914;
  cvs.height = window.innerHeight//890;
  
  let cvx = cvs.getContext('2d');

  let background = new Image();
  background.src = '../../images/backgrounds/background-city.png';

  background.onload = function(){
      cvx.drawImage(background,0,0);   
  }

  let mainChar = new Image();
  mainChar.src = '../../images/characters/main_character.png';

  mainChar.onload = function(){
      cvx.drawImage(mainChar,150,550);   
  }

  let square = new Image();
  square.src = '../../images/characters/square.png';

  square.onload = function(){
      cvx.drawImage(square,1400,550);   
  }

  $('.battle_canvas').fadeTo(2900,1);

  $('.start_btn').bind("click", function(){
    task();
})
}

function setPlayersAttr() {
    let mainName = `<div class="player_name"></div>`;
    let enemyName =  `<div class="enemy_name">Square</div>`;
    let playerHealthBar = `<div class="player_health_bar"></div>`;
    let enemyHealthBar = `<div class="enemy_health_bar"></div>`;
    let startBtn = `<div class="start_btn">attack</div>`;
    let battle = `
    <canvas class="battle_canvas"></canvas>
    `;
    $('body').prepend(startBtn);
    $('body').prepend(mainName);
    $('body').prepend(enemyName);
    $('body').prepend(playerHealthBar);
    $('body').prepend(enemyHealthBar);
    $('body').prepend(battle);
    $('.player_name').prepend(playerName.name);
}



let char = new Char('Zaebimba', 100, 10);
char.attack();