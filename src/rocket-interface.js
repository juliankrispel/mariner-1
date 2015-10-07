import $ from 'jquery';
import { steerLeft, steerRight, stopSteering, launchRocket  } from './rocket';

$('#launch').on('mousedown', launchRocket);

$('#right').on('mousedown', steerRight);

$('#left').on('mousedown', steerLeft);

$('#right, #left').on('mouseleave mouseup', stopSteering);

$(document.body).on('keydown', function(e){
  if(e.keyCode === 39){
    steerRight();
  }else if(e.keyCode === 37){
    steerLeft();
  }
});

$(document.body).on('keyup', stopSteering);
