import $ from 'jquery';
import {battle} from './battle';
import {playerName} from './nickname';

export const mode = {value: 'easy'};

export default function menu() {
  $('.nickname').remove();
  let menu = `<div class="menu">
  <div class="menu_player_name"></div>
    <div class="menu_middle">
      <li class="menu_item game">Game</li>
      <li class="menu_item mode" id="mode">
        <a href="#mode" class="menu_btn">Mode</a>
        <div class="menu_small mode">
          <a href="#" class="menu_easy">Chicken</a>
          <a href="#" class="menu_medium">Schoolboy</a>
          <a href="#" class="menu_hard">Overmind</a>
        </div>
      </li>
      <li class="menu_item map" id="map">
        <a href="#map" class="menu_btn">Map</a>
        <div class="menu_small map">
          <a href="#">Default</a>
          <a href="#">Sunny</a>
          <a href="#">Imagure</a>
        </div>
      </li>
      <li class="menu_item">Score</li>
      <li class="menu_item">Help</li>
    </div>
  </div>
  `
  $('body').append(menu);
  $('.menu_player_name').append(playerName.name);

  $('.game').bind("click", function(){
    battle();
  });

  
  let mapClk = false;
  let modeClk = false;

  $('.menu_item.mode').on('click', function(){
    if (!mapClk){
      $('.menu_small.mode').css('max-height','40em');
      mapClk = true;
    }
    else {
      $('.menu_small.mode').css('max-height','0em');
      mapClk = false;
    }
  });

  $('.menu_item.map').on('click', function(){
    if (!modeClk){
      $('.menu_small.map').css('max-height','40em');
      modeClk = true;
    }
    else {
      $('.menu_small.map').css('max-height','0em');
      modeClk = false;
    }
  });

  selectMode();
}

function selectMode() {
  $('.menu_small.mode').bind('click', function(event) {
    if ($(event.target).hasClass('menu_easy')) {
      mode.value = 'easy';
      console.log(mode.value);
    } else if ($(event.target).hasClass('menu_medium')){
      mode.value = 'medium';
      console.log(mode.value);
    } else if ($(event.target).hasClass('menu_hard')) {
      mode.value = 'hard';
      console.log(mode.value);
    }
  })
}