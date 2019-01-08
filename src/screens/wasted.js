import $ from 'jquery';
import {score} from '../characters/animation';
import {menu} from './menu';
import {mode} from './menu';
import {chooseNickName} from './nickname'
import intro from './intro';

export function wasted() {
  console.log('wasted');
  let wasted = `<div class="wasted"><span>wasted</span></div>`;

  $('body').append(wasted);
  $('.wasted').fadeTo(1000, 0.8)

  let scoreTab = `<div class="wasted_score">Your score is ${score.value}</div>`;
  $('body').append(scoreTab);
  $('.wasted_score').fadeTo(2000, 1);

  let continueTab = `<div class="continue">Press Enter To Continue...</div>`;
  $('body').append(continueTab);

  //$(document).off('click');

  $(document).bind('keypress click',function(event) {
    if(event.which == 13 || event.type === 'click') {
 
      $(document).off('click');
      mode.value = "easy";
      $('.score').remove();
      $('.battle_canvas').remove();
      $('.enemy_health_bar').remove();
      $('.player_health_bar').remove();
      $('.enemy_name').remove();
      $('.player_name').remove();
      $('.start_btn').remove();
      $('.square').remove();
      $('.task_menu').remove();
      $('.wasted').remove();
      $('.continue').remove();
      $('.wasted_score').remove();
      $('.menu').remove();
      
      score.value = 0;

      menu();
    }
});
}

