import $ from 'jquery';
import {math} from '../../components/tasks/math/math';

export function task() {
  if ($('.task_menu').length) {
    $('.task_menu').show();
  } else {
    let taskMenu = `<div class="task_menu">
    <button class="math">Math</button>
    <button class="eng-ru">Translate</button>
    <button class="capitals">Capitals</button>
    </div>`;
    $('body').append(taskMenu);
  }
  
  $('.math').on('click', function(event) {
    // event.preventDefault();
    event.stopImmediatePropagation();
    $('.task_menu').css('display','none');
    // $('.task_menu').remove();
    console.log('math');
    math();
  })
  
  $('.eng-ru').on('click', function() {
    
  })
  
  $('.capitals').on('click', function() {
    
  })
}

