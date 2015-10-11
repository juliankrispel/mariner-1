import $ from 'jquery';
import actions from './rocket-actions';

var state = {
  hasLaunched: false
}

export {state};

export function renderRocketInterface(){
  // The template is just a string
  var template = `
  <div class="rocket-interface">
  </div>
  `;

  var el = $(template);

  //  $('.launch-button', el).click(function(){
  //    state.hasLaunched = true;
  //    actions.launchRocket();
  //  });

  return el;
}
