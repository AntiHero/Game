import $ from 'jquery';

export function math() {
  let math = `<div class="math_form">
    <div class="math_task">2 * 14</div>
    <input type="text" name="" class="math_solve" placeholder="---" maxlength="5"/>
    <button class="math_submit">ok</button>
  </div>`

  $('body').prepend(math);
}