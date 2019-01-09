import "@babel/polyfill";
import $ from 'jquery';
import {chooseNickName} from './nickname';

export default function intro() {
  let sourceUrl = "music/intro.mp3"
  $('body').append(`<div class='intro'>
  <h1 class='intro_header'><span>Destructor</span></h1>
  <span class='intro_key'>Press any key...</span>
  </div>`);
  $('body').bind("keypress click", function(){
    
    if ($("audio").attr("src") === undefined) {
      $("audio").attr("src", sourceUrl);
    }
    
    $('.intro').fadeOut(3000, chooseNickName);
  });

  $(document).keydown(function(event) {
    if(event.keyCode == 32) {
        $("audio").trigger("pause");
    }
  })
}