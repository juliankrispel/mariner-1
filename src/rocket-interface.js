import $ from 'jquery';
import { 
  steerLeft, 
  steerRight, 
  stopSteering, 
  launchRocket  
} from './rocket';

function renderRocketInterface(container){
  var template = `
    <button class="launch-button">Launch Rocket</button>
  `;
  var el = $(container).append($(template));
  $('.launch-button', el).click(function(){
    launchRocket();
  });
}

renderRocketInterface('#interface');
