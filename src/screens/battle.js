import $ from 'jquery';
import {playerName} from './nickname';

export function battle() {
  $('.menu').remove();
  let battlePlayerName = `<div class="battle_player_name"></div>`
  let battle = `
  <canvas class="battle_canvas"></canvas>
  `
  $('body').prepend(battlePlayerName);
  $('body').prepend(battle);
  $('.battle_player_name').prepend(playerName.name);

  let cvs = document.querySelector('canvas');
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
  let cvx = cvs.getContext('2d');

  let background = new Image();
  background.src = '../../images/background-city.png';

  background.onload = function(){
      cvx.drawImage(background,0,0);   
  }
}
