import $ from 'jquery';
import actions from '../src/rocket-actions';
import {renderRocketInterface} from '../src/rocket-interface';

it('should launch the rocket if the button is pressed', function(){
  let el = renderRocketInterface();
  let spy = spyOn(actions, 'launchRocket');

  $('.launch-rocket', el).click();
  expect(spy).toHaveBeenCalled();
});

it('should steer right if the right button is pressed', function(){
  let el = renderRocketInterface();
  let spy = spyOn(actions, 'steerRight');

  $('.steer-right', el).click();
  expect(spy).toHaveBeenCalled();
});

it('should steer left if the left button is pressed', function(){
  let el = renderRocketInterface();
  let spy = spyOn(actions, 'steerLeft');

  $('.steer-left', el).click();
  expect(spy).toHaveBeenCalled();
});
