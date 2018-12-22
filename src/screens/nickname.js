import $ from 'jquery';
import menu from './menu';


export const playerName = {name: ''};
export function chooseNickName() {
  let nicknameHtml = `
  <div class="nickname">
    <form class="form_nickname">
      <label for="nickname">Your Name</label>
      <input class="nickname_input" autocomplete="off" placeholder="----" type="text" name="nickname" required="required">
      <input class="nickname_button" type="submit" value="ok">
    </form>
  </div>
  `
  $('.intro').remove();
  $('body').append(nicknameHtml);
  $('.nickname').fadeTo(3000, 1); 

  $('.nickname_button').click(function(event){
    event.preventDefault();
    playerName.name = $('.nickname_input').val();
    menu();
  });  
}