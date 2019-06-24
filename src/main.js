import { cardJumble, cardArray } from './ping-pong';
import './styles.css';

$(document).ready(function () {
  $('#ping-pong-form').submit(function (event) {
    event.preventDefault();
    console.log(cardJumble(cardArray));

  });

});
