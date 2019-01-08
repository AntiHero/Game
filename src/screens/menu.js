import $ from 'jquery';
import {battle} from './battle';
import {playerName} from './nickname';

export const mode = {value: 'easy'};

export function menu() {

  let mapClk = false;
  let modeClk = false;

  if ($('.nickname').length) {
    $('.nickname').remove();
  }

  console.log('first');
  let menu = `<div class="menu">
  <div class="menu_player_name"></div>
    <div class="menu_middle">
      <li class="menu_item game">Game</li>
      <li class="menu_item mode" id="mode">
        <a href="#mode" class="menu_btn_mode">Mode</a>
        <div class="menu_small mode">
          <a href="#" class="menu_easy">Chicken</a>
          <a href="#" class="menu_medium">Schoolboy</a>
          <a href="#" class="menu_hard">Overmind</a>
        </div>
      </li>
      <li class="menu_item map" id="map">
        <a href="#map" class="menu_btn_map">Map</a>
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
  $('body').prepend(menu);
  if ($('.menu_player_name').text() == '') {
    $('.menu_player_name').append(playerName.name);
  }

  $(document).on('click', function(event) {
    //event.stopImmediatePropagation();

    if($(event.target).hasClass('game')) {
      $('.menu_small.mode').css('max-height','0em');
      battle();
    } 
    
    if ($(event.target).hasClass('menu_btn_mode')) {

      modeClk ^= true; 
      modeSelect(modeClk);
    } 

    if ($(event.target).hasClass('menu_easy')) {
      mode.value = 'easy';
      $('.menu_small.mode').css('max-height','0em');
      modeClk = false;

    } else if ($(event.target).hasClass('menu_medium')){
      mode.value = 'medium';
      $('.menu_small.mode').css('max-height','0em');
      modeClk = false;

    } else if ($(event.target).hasClass('menu_hard')) {
      mode.value = 'hard';
      $('.menu_small.mode').css('max-height','0em');
      modeClk = false;

    } 

    if($(event.target).hasClass('menu_btn_map')) {
      $('.menu_small.mode').css('max-height','0em');
      mapSelect(mapClk);
    }
  })

}

function modeSelect(flag) {
  if (flag){
    $('.menu_small.mode').css('max-height','40em');
  }
  else {
    $('.menu_small.mode').css('max-height','0em');
  }
}

function mapSelect(flag) {
  if (flag){
    $('.menu_small.map').css('max-height','40em');
  }
  else {
    $('.menu_small.map').css('max-height','0em');
  }
}

function selectMode() {
  // if ($(event.target).hasClass('menu_easy')) {
  //   mode.value = 'easy';
  //   console.log(mode.value);
  // } else if ($(event.target).hasClass('menu_medium')){
  //   mode.value = 'medium';
  //   console.log(mode.value);
  // } else if ($(event.target).hasClass('menu_hard')) {
  //   mode.value = 'hard';
  //   console.log(mode.value);
  // } 
}
// function selectMode() {
//   //$('.menu_small.mode').on('click', function(event) {
//     if ($(event.target).hasClass('menu_easy')) {
//       mode.value = 'easy';
//       console.log(mode.value);
//     } else if ($(event.target).hasClass('menu_medium')){
//       mode.value = 'medium';
//       console.log(mode.value);
//     } else if ($(event.target).hasClass('menu_hard')) {
//       mode.value = 'hard';
//       console.log(mode.value);
//     }
//   //})
//   console.log('last')
// }

// function bindMenu() {
//   let mapClk = false;
//   let modeClk = false;

//   //$('.menu_item.mode').on('click', function(){
//     console.log('bind menu');
//     // if (!mapClk){
//     //   $('.menu_small.mode').css('max-height','40em');
//     //   mapClk = true;
//     // }
//     // else {
//     //   $('.menu_small.mode').css('max-height','0em');
//     //   mapClk = false;
//     // }
//   //});

//   //$('.menu_item.map').on('click', function(){
//     console.log('bind menu 2');
//     // if (!modeClk){
//     //   $('.menu_small.map').css('max-height','40em');
//     //   modeClk = true;
//     // }
//     // else {
//     //   $('.menu_small.map').css('max-height','0em');
//     //   modeClk = false;
//     // }
//   //});
// }