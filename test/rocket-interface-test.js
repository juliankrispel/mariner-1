import $ from 'jquery';
import rocketControl from '../src/rocket-control';
import {renderRocketInterface} from '../src/rocket-interface';

it('Launch Button should launch the rocket', function(){
  let spy = spyOn(rocketControl, 'launchRocket');
  let el = renderRocketInterface();
  el.find('.launch-rocket').click();
  expect(spy).toHaveBeenCalled();
});

it('The left arrow button should steer the rocket to the left', function(){
  let spy = spyOn(rocketControl, 'steerLeft');
  let el = renderRocketInterface();
  el.find('.steer-left').click();
  expect(spy).toHaveBeenCalled();
});

it('The right arrow button should steer the rocket to the right', function(){
  let spy = spyOn(rocketControl, 'steerRight');
  let el = renderRocketInterface();
  el.find('.steer-right').click();
  expect(spy).toHaveBeenCalled();
});
