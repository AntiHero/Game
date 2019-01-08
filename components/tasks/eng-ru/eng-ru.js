import $ from 'jquery';
//import {task} from '../../../src/screens/task';
import {context} from '../../../src/screens/battle';


import {enemy} from '../../../src/screens/battle';
import {mode} from '../../../src/screens/menu';
import {mainHero} from '../../../src/screens/battle';
import {attack} from '../../../src/characters/animation';
import {damaged} from '../../../src/characters/animation';
//import {squareFightInit} from '../../../src/screens/battle';
//import *as dataEasy from './vocab-easy'
//import *as dataMedium from './vocab-easy'

let result = {value: 0};

export function eng() {
  $('.start_btn').unbind();
  let keys = [];
  let values = []
  let task = {};
  let eng = `<div class="eng_form">
  <div class="eng_task"></div>
  <input type="text" name="eng" class="eng_solve" placeholder="---" maxlength="15" autocomplete="off"/>
  <button class="eng_submit">ok</button>
  </div>`;
  
  $('body').append(eng);

  if (mode.value === 'easy') {
    makeEasy(keys, values, task);
  } else if (mode.value === 'medium') {
    makeMedium(keys, values, task);
  } else if (mode.value === 'hard') {
    makeHard(keys, values, task);
  } else {
    makeEasy(keys, values, task);
 
  }
}

function decision(task) {
  result.value = $('.eng_solve').val().toLowerCase();;
  let value;
  let array = [];
  for (let key in task) {
    value = task[key];
  }

  if (typeof value === 'string') {
    array[0] = value;
  } else {
    array = value;
  }

  for (let i = 0; i < array.length; i++) {

    if(array[i] === result.value) {
      $('.eng_task, .eng_submit, .eng_solve ').css('color', '#36c423');
      $('.eng_form').css('box-shadow', '0 0 10px #36c423');
      $('.eng_solve').val('right');
      $('.eng_submit').remove();
      
      setTimeout(function() {
        $('.eng_form').remove();
        console.log('remove');
        // $('.start_btn').bind('click', task);
      }, 1500);
      attack(mainHero.val.name, context.val);
      damaged(enemy.val.name, context.val);
      return 0;
      console.log('right')
    } 
  } 
      $('.eng_task, .eng_submit, .eng_solve ').css('color', '#da2525');
      $('.eng_form').css('box-shadow', '0 0 10px #da2525');
      $('.eng_solve').val('wrong');
      $('.eng_submit').remove();
  
      setTimeout(function() {
        $('.eng_form').remove();
        // $('.start_btn').bind('click', task);
        console.log('remove');
      }, 1500);
      console.log('wrong');
      attack(enemy.val.name, context.val);
      //damaged(mainHero.val.name, context.val);
  
}

function makeEasy(keys, values, task) {
  $.getJSON('components/tasks/eng-ru/vocab-easy.json', function(data) { 
    return data;
  }).then(function(data) {
    $.each(data[0], function(key, val) {
      keys.push(key);
      values.push(val);
    });
    let num = Math.floor(Math.random()*keys.length);
    task[keys[num]] = values[num];
    return task;
  }).then(
    function(task) {
      for (let property in task) {
        $('.eng_task').append(property);
      }
      return task;
  }
  ).then(function(task) {
    $('.eng_submit').on('click', function(event) {
      if ($(event.target).hasClass('eng_submit')) {
        console.log('request');
        decision(task);
      }
  })});      
}

function makeMedium(keys, values, task) {

  $.getJSON('components/tasks/eng-ru/vocab-medium.json', function(data) { 
    console.log(data);
  }).then(function(data) {
    $.each(data[0], function(key, val) {
      keys.push(key);
      values.push(val);
    });
    console.log(keys);
    console.log(values);
    let num = Math.floor(Math.random()*keys.length);
    task[keys[num]] = values[num];
    return task;
  }).then(
    function(task) {
      for (let property in task) {
        console.log(property);
        $('.eng_task').append(property);
      }
      return task;
  }
  ).then(function(task) {
    $('.eng_submit').on('click', function(event) {
      if ($(event.target).hasClass('eng_submit')) {
        decision(task);
      }
  })});      
}

function makeHard(keys, values, task) {
  $.getJSON('components/tasks/eng-ru/vocab-hard.json', function(data) { 
    console.log(data);
  }).then(function(data) {
    $.each(data[0], function(key, val) {
      keys.push(key);
      values.push(val);
    });
    console.log(keys);
    console.log(values);
    let num = Math.floor(Math.random()*keys.length);
    task[keys[num]] = values[num];
    return task;
  }).then(
    function(task) {
      for (let property in task) {
        console.log(property);
        $('.eng_task').append(property);
      }
      return task;
  }
  ).then(function(task) {
    $('.eng_submit').on('click', function(event) {
      if ($(event.target).hasClass('eng_submit')) {
        decision(task);
      }
  })});      
}