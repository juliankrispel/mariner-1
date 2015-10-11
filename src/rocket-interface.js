import $ from 'jquery';
import actions from './rocket-actions';

var state = {
  hasLaunched: false
}

export {state};

export function renderLaunchButton(){
  var template = '<button class="launch-button">Launch Rocket</button>';
  var el = $(template);
  return el;
}

export function renderRightButton(){
  var template = '<button class="steer-right float-right">></button>';
  var el = $(template);
  state.hasLaunched = false;

  $(el).on('mouseup mouseleave', function(){
    actions.stopSteering();
  });

  $(el).on('mousedown', function(){
    if(state.hasLaunched === true){
      actions.steerRight();
    }
  });

  return el;
}

export function renderLeftButton(){
  var template = '<button class="steer-left float-right"><</button>';
  var el = $(template);

  $(el).on('mouseup mouseleave', function(){
    actions.stopSteering();
  });

  $(el).on('mousedown', function(){
    if(state.hasLaunched === true){
      actions.steerLeft();
    }
  });

  return el;
}

export function renderRocketInterface(){
  // The template is just a string
  var template = `<div class="rocket-interface"> </div>`;

  var el = $(template);

  el.append(renderLaunchButton());
  el.append(renderRightButton());
  el.append(renderLeftButton());

  $('.launch-button', el).click(function(){
    state.hasLaunched = true;
    actions.launchRocket();
  });

  return el;
}
