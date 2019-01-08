import $ from 'jquery';
//import {task} from '../../../src/screens/task';
import {context} from '../../../src/screens/battle';


import {enemy} from '../../../src/screens/battle';
import {mode} from '../../../src/screens/menu';
import {mainHero} from '../../../src/screens/battle';
import {attack} from '../../../src/characters/animation';
import {damaged} from '../../../src/characters/animation';
//import {squareFightInit} from '../../../src/screens/battle';

let result = {value: 0};

export function math() {
  $('.start_btn').unbind();

  let mathTask = 0;

  if (mode.value === 'easy') {
    mathTask = makeEasy();
  } else if (mode.value === 'medium') {
    mathTask = makeMedium();
  } else if (mode.value === 'hard') {
    mathTask = makeHard();
  }
  else {
    mathTask = makeEasy();
  }
  

  // if ($('.math_form').length) {
  //   $('.math_form').show();
  // } else {
  let math = `<div class="math_form">
  <div class="math_task"></div>
  <input type="text" name="math" class="math_solve" placeholder="---" maxlength="5" autocomplete="off"/>
  <button class="math_submit">ok</button>
  </div>`;
  
  $('body').append(math);
  $('.math_task').append(mathTask);
  // }
  console.log(mathTask);
  

  $('.math_submit').on('click', function(event) {
    if ($(event.target).hasClass('math_submit')) {
      decision(mathTask);
    }
  });
}

function decision(mathTask) {
  result.value = $('.math_solve').val();
  // $('.math_form').remove();
  // $('.math_form').css('display','none');
  console.log(result.value);
  console.log(eval(mathTask));
  if(eval(mathTask) === Number(result.value)) {
    $('.math_task, .math_submit, .math_solve ').css('color', '#36c423');
    $('.math_form').css('box-shadow', '0 0 10px #36c423');
    $('.math_solve').val('right');
    $('.math_submit').remove();
    
    setTimeout(function() {
      $('.math_form').remove();
      // $('.start_btn').bind('click', task);
    }, 1500);
    console.log(mainHero.val.name);
    console.log(enemy.val.name);

    attack(mainHero.val.name, context.val);
    damaged(enemy.val.name, context.val);

    console.log('right')
  } else {
    $('.math_task, .math_submit, .math_solve ').css('color', '#da2525');
    $('.math_form').css('box-shadow', '0 0 10px #da2525');
    $('.math_solve').val('wrong');
    $('.math_submit').remove();

    setTimeout(function() {
      $('.math_form').remove();
      // $('.start_btn').bind('click', task);
    }, 1500);
    console.log('wrong');
    attack(enemy.val.name, context.val);
    //damaged(mainHero.val.name, context.val);
  }
  
  
}

function makeEasy() {
  const easyMin = 1;
  const easyMax = 9;
  const operations = ['+', '-', '*'];

  const operand1 = Math.floor(Math.random()*(easyMin + easyMax) + easyMin);
  const operand2 = Math.floor(Math.random()*(easyMin + easyMax) + easyMin);
  const sign  = operations[Math.floor(Math.random()*(operations.length))];

  const firstLvl = operand1 + ' ' + sign + ' ' + operand2;
  const task = firstLvl;
  return task;
}

function makeMedium() {
  const mediumMin = 5;
  const mediumMax = 15;
  const operations = ['+', '-', '*'];

  const operand1 = Math.floor(Math.random()*(mediumMin + mediumMax) + mediumMin);
  const operand2 = Math.floor(Math.random()*(mediumMin + mediumMax) + mediumMin);
  const sign  = operations[Math.floor(Math.random()*(operations.length))];

  const firstLvl = operand1 + ' ' + sign + ' ' + operand2;
  const task = firstLvl;
  return task;
}

function makeHard() {
  const hardMin = 5000;
  const hardMax = 10000;
  const operations = ['+', '-', '*'];

  const operand1 = Math.floor(Math.random()*(hardMin + hardMax) + hardMin);
  const operand2 = Math.floor(Math.random()*(hardMin + hardMax) + hardMin);
  const sign  = operations[Math.floor(Math.random()*(operations.length))];

  const firstLvl = operand1 + ' ' + sign + ' ' + operand2;
  const task = firstLvl;
  return task;
}