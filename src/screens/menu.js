import $ from 'jquery';

import {playerName} from './nickname';

export default function menu() {
  $('.nickname').remove();
  let menu = `<div class="menu">
    <div class="menu_player_name"></div>
    <ul class="menu_list">
      <li class="game">Game</li>
      <li class="options">Score</li>
      <li class="score">Help</li>
    </ul>
  </div>
  `
  $('body').append(menu);
  $('.menu_player_name').append(playerName.name);
}