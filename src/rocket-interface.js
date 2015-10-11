import $ from 'jquery';
import actions from './rocket-actions';

export function renderRocketInterface(container){

	// The template is just a string
  var template = `
    <button class="launch-button">Launch Rocket</button>
  `;

  var el = $(container).append($(template));

  $('.launch-button', el).click(function(){
		actions.launchRocket();
  });
}
