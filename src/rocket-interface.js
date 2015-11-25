import $ from 'jquery';
import rocketControl from './rocket-control';

function renderLaunchButton() {
  var template = '<button class="launch-rocket">Launch</button>';
  var el = $(template);
  $(el).click(function(){
    rocketControl.launchRocket();
  });
  return el;
}

function renderRightButton() {
  var template = '<button class="steer-right float-right">></button>';
  var el = $(template);

  $(el).click(function(){
    rocketControl.steerRight();
  });
  return el;

}

function renderLeftButton() {
  var template = '<button class="steer-left float-right"><</button>';
  var el = $(template);
  $('.steer-left', el).click(function(){
    rocketControl.steerLeft();
  });
  return el;
}

export function renderRocketInterface(){
  // The template is just a string
  var template = `
  <div class="rocket-interface">
  </div>
  `;

  var el = $(template);
  el.append(renderLaunchButton());
  el.append(renderRightButton());
  el.append(renderLeftButton());
  
  return el;
}
