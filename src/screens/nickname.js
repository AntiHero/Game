import $ from 'jquery';
import {menu} from './menu';

export const playerName = {name: ''};
export function chooseNickName() {
  let nicknameHtml = `
  <div class="nickname">
    <form class="form_nickname">
      <label for="nickname">Your Name</label>
      <input class="nickname_input" autocomplete="off" placeholder="----" type="text" name="nickname" required="required" maxlenght="15">
      <input class="nickname_button" type="submit" value="ok">
    </form>
  </div>
  `
  $('.intro').remove();
  $('body').append(nicknameHtml);
  $('.nickname').fadeTo(3000, 1); 

  $('.nickname_button').click(function(event){
    event.preventDefault();
    console.log(playerName.name)
    playerName.name = $('.nickname_input').val();
    if (playerName.name === '') {
      $('[placeholder]').css('font-weight', '200');
      $('.nickname_input').attr("placeholder", "Imechko plz");
    } else {
      menu();
    }
  });  
}

