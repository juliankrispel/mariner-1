import $ from 'jquery';
import rocketControl from '../src/rocket-control';
import {renderRocketInterface} from '../src/rocket-interface';

it('should launch the rocket when the launch button is pressed', function(){
  var spy = spyOn(rocketControl, 'launchRocket');
  var el = renderRocketInterface();
  el.find('.launch-rocket').click();
  expect(spy).toHaveBeenCalled();
});

it('should steer the rocket to the right when the steer-right button is pressed', function(){
  var spy = spyOn(rocketControl, 'steerRight');
  var el = renderRocketInterface();
  el.find('.steer-right').click();
  expect(spy).toHaveBeenCalled();
});

it('should steer the rocket to the left when the steer-left button is pressed', function(){
  var spy = spyOn(rocketControl, 'steerLeft');
  var el = renderRocketInterface();
  el.find('.steer-left').click();
  expect(spy).toHaveBeenCalled();
});
