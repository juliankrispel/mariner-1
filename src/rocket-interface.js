import $ from 'jquery';
import rocketControl from './rocket-control';

export function renderRocketInterface(){
  // The template is just a string
  var template = `
  <div class="rocket-interface">
  <button class="launch-rocket">Launch</button>
  <button class="steer-right float-right">></button>
  <button class="steer-left float-right"><</button>
  </div>
  `;

  var el = $(template);

  $('.launch-rocket', el).click(function(){
    rocketControl.launchRocket();
  });

  $('.steer-righht', el).click(function(){
    rocketControl.steerRight;
  });

  $('.steer-left', el).click(function(){
    rocketControl.steerRight();
  });

  return el;
}
