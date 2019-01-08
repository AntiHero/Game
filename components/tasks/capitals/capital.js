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

export function capitals() {
  $('.start_btn').unbind();
  let keys = [];
  let values = []
  let task = {};
  let eng = `<div class="capitals_form">
  <div class="capitals_task"></div>
  <input type="text" name="capitals" class="capitals_solve" placeholder="---" maxlength="15" autocomplete="off"/>
  <button class="capitals_submit">ok</button>
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
  result.value = $('.capitals_solve').val().toLowerCase();;
  let value;
  let array = [];
  for (let key in task) {
    value = task[key];
  }

  // if (typeof value === 'string') {
  //   array[0] = value;
  // } else {
  //   array = value;
  // }
  if(value === result.value) {
    $('.capitals_task, .capitals_submit, .capitals_solve ').css('color', '#36c423');
    $('.capitals_form').css('box-shadow', '0 0 10px #36c423');
    $('.capitals_solve').val('right');
    $('.capitals_submit').remove();
    
    setTimeout(function() {
      $('.capitals_form').remove();
      console.log('remove');
      // $('.start_btn').bind('click', task);
    }, 1500);
    attack(mainHero.val.name, context.val);
    damaged(enemy.val.name, context.val);
    
    console.log('right');
    return 0;
  } else {
    $('.capitals_task, .capitals_submit, .capitals_solve ').css('color', '#da2525');
    $('.capitals_form').css('box-shadow', '0 0 10px #da2525');
    $('.capitals_solve').val('wrong');
    $('.capitals_submit').remove();

    setTimeout(function() {
      $('.capitals_form').remove();
      // $('.start_btn').bind('click', task);
      console.log('remove');
    }, 1500);
    console.log('wrong');
    attack(enemy.val.name, context.val);
    //damaged(mainHero.val.name, context.val);
  }
    
  
}

function makeEasy(keys, values, task) {
  $.getJSON('components/tasks/capitals/capitals-easy.json', function(data) { 
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
        console.log('property');
        $('.capitals_task').append(property);
      }
      return task;
  }
  ).then(function(task) {
    $('.capitals_submit').on('click', function(event) {
      if ($(event.target).hasClass('capitals_submit')) {
        console.log('request');
        decision(task);
      }
  })});      
}

function makeMedium(keys, values, task) {

  $.getJSON('components/tasks/capitals/capitals-medium.json', function(data) { 
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
        $('.capitals_task').append(property);
      }
      return task;
  }
  ).then(function(task) {
    $('.capitals_submit').on('click', function(event) {
      if ($(event.target).hasClass('capitals_submit')) {
        decision(task);
      }
  })});      
}

function makeHard(keys, values, task) {
  $.getJSON('components/tasks/capitals/capitals-hard.json', function(data) { 
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
        $('.capitals_task').append(property);
      }
      return task;
  }
  ).then(function(task) {
    $('.capitals_submit').on('click', function(event) {
      if ($(event.target).hasClass('capitals_submit')) {
        decision(task);
      }
  })});      
}