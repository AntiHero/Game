import $ from 'jquery';
import {math} from '../../components/tasks/math/math';

export function task() {
  let taskMenu = `<div class="task_menu">
  <button class="math">Math</button>
  <button class="eng-ru">Translate</button>
  <button class="capitals">Capitals</button>
  </div>`;
 
  if ($('.task_menu').length) {
    console.log('yes');
    $('.task_menu').show();
  } else {
    console.log('no');
    $('body').append(taskMenu);
  }
  

  $('.math').on('click', function() {
    $('.task_menu').css('display','none');
    math();
  })
  
  $('.eng-ru').on('click', function() {
    
  })
  
  $('.capitals').on('click', function() {
    
  })
}

