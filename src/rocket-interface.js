import $ from 'jquery';
import rocketControl from './rocket-control';

export function renderLaunchButton(){
  var template = '<button class="launch-rocket">Launch</button>';
  var el = $(template);

  $(el).click(function(){
    rocketControl.launchRocket();
  });

  return el;
}

export function renderRocketInterface(){
  // The template is just a string
  var template = `
  <div class="rocket-interface">
  <button class="steer-right float-right">></button>
  <button class="steer-left float-right"><</button>
  </div>
  `;

  var el = $(template);
  el.prepend(renderLaunchButton());

  $('.steer-right', el).click(function(){
    rocketControl.steerRight();
  });

  $('.steer-left', el).click(function(){
    rocketControl.steerLeft();
  });

  return el;
}
