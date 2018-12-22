import "@babel/polyfill";
import $ from 'jquery';
import chooseNickName from './screens/nickname';

export default function intro() {
  $('body').append(`<div class='intro'>
  <h1 class='intro_header'><span>Destructor</span></h1>
  <span class='intro_key'>Press any key...</span>
  </div>`);
  $(document).bind("keypress click", function(){
    $('.intro').fadeOut(3000, chooseNickName);
  });
}