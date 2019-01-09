import $ from 'jquery';

export function help() {
  let helpPage = `<div class="help_page"><p>Raaaaawwwr!!</br>Hey, buddy, now you are opening the exciting world of one of the most underrated games, no, not in the world, but
  of the whole 2018 year! Here your main aim is to solve as many tasks as you can.
  There are three levels of difficulty in "Destructor": <b>easy</b>, <b>medium</b> and <b>hard</b>. Choose one and try yourself!
  When press <span>"ATTACK"</span> you will be able to choose one of three tasks <b>"Math"</b>, <b>"English to Russian translation"</b>, 
  <b>"Capitals"</b>. Do your best and become the greatest Destructor!
  </p></div>`;
  console.log('in help');
  $('body').append(helpPage);
  $('.help_page').fadeTo(500, 1);

  $(document).keydown(function(event) {
    if (event.keyCode === 27) {
      console.log('removed')
      $('.help_page').remove();
    }
  })
}

