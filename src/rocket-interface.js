import $ from 'jquery';
import actions from './rocket-actions';

export function renderLaunchButton(){
  var template = '<button class="launch-rocket">Launch</button>';
  var el = $(template);
  $(el).click(function(){
  });
  return el;
}

export function renderRocketInterface(){
  var template = `
  <div class="rocket-interface">
  <button class="steer-right float-right">></button>
  <button class="steer-left float-right"><</button>
  </div>
  `;

  var el = $(template);
  el.append(renderLaunchButton());

  $('.steer-right', el).click(function(){
    actions.steerRight();
  });

  $('.steer-left', el).click(function(){
    actions.steerLeft();
  });

  return el;
}
