import $ from 'jquery';
import rocketControl from './rocket-control';

export function renderRocketInterface(){
  // The template is just a string
  var template = `
  <div class="rocket-interface">
  <button class="launch-button">Launch</button>
  <button class="steer-right float-right">></button>
  <button class="steer-left float-right"><</button>
  </div>
  `;

  var el = $(template);

  $('.launch-button', el).click(function(){
    rocketControl.launchRocket();
  });

  $('.steer-right', el).click(function(){
    rocketControl.steerLeft();
  });

  $('a.steer-left', el).click(function(){
    rocketControl.steerLeft();
  });

  return el;
}
