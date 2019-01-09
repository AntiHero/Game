import $ from 'jquery';

export function score() {
  let scorePage = `<div class="score_page"><h2 class="score_page_title">Top Scores</h2></div>`;
  console.log('in score');
  $('body').append(scorePage);
  $('.score_page').fadeTo(500,1);

  $(document).keydown(function(event) {
    if (event.keyCode === 27) {
      console.log('removed')
      $('.score_page').remove();
    }
  })
}




