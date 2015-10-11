import $ from 'jquery';
import actions from '../src/rocket-actions';
import {state, renderRocketInterface} from '../src/rocket-interface';

describe('Rocket Interface', function(){
  beforeEach(function(){
    $('body').append(renderRocketInterface());
    state.hasLaunched = false;
  });

  it('should render a launch button', function(){
    expect($('button.launch-button').length).toBe(1);
    expect($('button.steer-right').length).toBe(1);
    expect($('button.steer-left').length).toBe(1);
  });

  it('should launch a rocket when the launch button is clicked', function(){
    let spy = spyOn(actions, 'launchRocket');
    $('.launch-button').click();
    expect(actions.launchRocket).toHaveBeenCalled();
    spy.restore();
  });

  it('hasLaunched should return true if the rocket has launched', function(){
    $('.launch-button').click();
    expect(state.hasLaunched).toBe(true);
  });

  it('should not steer right if it hasn\'t launched yet', function(){
    let spy = spyOn(actions, 'steerRight');
    $('.steer-right').trigger('mousedown');
    expect(spy).toNotHaveBeenCalled()
    spy.restore();
  });

  it('should steer right if it has launched', function(){
    let spy = spyOn(actions, 'steerRight');
    $('.launch-button').click()
    $('.steer-right').trigger('mousedown');
    expect(spy).toHaveBeenCalled()
    spy.restore();
  });
});
