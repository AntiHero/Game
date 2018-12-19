import $ from 'jquery';

export default function intro() {
  $('body').append("<div class='intro'><h1 class='intro_header'><span>Destructor</span></h1></div>");
  $('.intro').fadeOut(4000);
}