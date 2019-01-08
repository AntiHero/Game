import $ from 'jquery';

import {enemy} from './battle';
import {mainHero} from './battle';

export default function win() {
  let messages = ["You do great!", "Destruct him again!", "Awesome!", "Luchshiy!", "Yeeee boiiii!", "Cmon!"];
  let message = messages[Math.floor(Math.random()*messages.length)];
  let winMsg = `<div class="win_msg"><span class="text"></span></div>`
  console.log(message);
  $('body').append(winMsg);
  $('.text').append(message);

  $('.win_msg').fadeTo(1500, 0.5).fadeTo(2000, 0, remove);

  enemy.val.health = 100;
  mainHero.val.health = 100;

  $('.enemy_health_bar').css('background', 'linear-gradient(to left, ' + 'red ' + `100` + '%,'  + 'transparent ' + `0` + '%)');
  $('.player_health_bar').css('background', 'linear-gradient(to right, ' + 'red ' + `100` + '%,'  + 'transparent ' + `0` + '%)');
}

function remove() {
  console.log('remove');
  $('.text').text = '';
  $('.win_msg').remove();
}