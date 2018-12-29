import $ from 'jquery';
import {battle} from './battle';
import {playerName} from './nickname';

export default function menu() {
  $('.nickname').remove();
  let menu = `<div class="menu">
  <div class="menu_player_name"></div>
    <div class="menu_middle">
      <li class="menu_item game">Game</li>
      <li class="menu_item mode" id="mode">
        <a href="#mode" class="menu_btn">Mode</a>
        <div class="menu_small mode">
          <a href="#">Chicken</a>
          <a href="#">Schoolboy</a>
          <a href="#">Overmind</a>
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
}

