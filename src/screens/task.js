import $ from 'jquery';
import {math} from '../../components/tasks/math/math';
import {eng} from '../../components/tasks/eng-ru/eng-ru';
import {capitals} from '../../components/tasks/capitals/capital';

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
    
    event.stopImmediatePropagation();
    console.log(event.target);
    if ($(event.target).hasClass('math')) {
      $('.task_menu').css('display','none');
      // $('.task_menu').remove();
      console.log('math');
      math();
    }
  })
  
  $('.eng-ru').on('click', function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    if ($(event.target).hasClass('eng-ru')) {
      $('.task_menu').css('display','none');
      // $('.task_menu').remove();
      console.log('eng-ru');
      eng();
    }
    
  })
  
  $('.capitals').on('click', function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    if ($(event.target).hasClass('capitals')) {
      $('.task_menu').css('display','none');
      // $('.task_menu').remove();
      console.log('capitals');
      capitals();
    }
  })
}

