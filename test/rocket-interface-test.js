import $ from 'jquery';
import rocketControl from '../src/rocket-control';
import {renderRocketInterface} from '../src/rocket-interface';

describe('rocketInterface', ()=> {
  beforeEach(()=> {
    $('body').append(renderRocketInterface());
  });

  it('launches the rocket when the launch button is pressed', ()=> {
    spyOn(rocketControl, 'launchRocket');
    $('.launch-rocket').click();
    expect(rocketControl.launchRocket).toHaveBeenCalled();
  });

  it('steers right when the right button is pressed', ()=> {
    spyOn(rocketControl, 'steerRight');
    $('.steer-right').click();
    expect(rocketControl.steerRight).toHaveBeenCalled();
  });

  it('steers left when the left button is pressed', ()=> {
    spyOn(rocketControl, 'steerLeft');
    $('.steer-left').click();
    expect(rocketControl.steerLeft).toHaveBeenCalled();
  });
});
