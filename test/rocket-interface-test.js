import $ from 'jquery';
import rocketControl from '../src/rocket-control';
import {renderRocketInterface} from '../src/rocket-interface';

describe('rocket interface', () => {
  beforeEach(()=> $('body').append(renderRocketInterface()));

  it('launches the rocket when the launch button is pressed', () => {
    spyOn(rocketControl, 'launchRocket');
    $('.launch-rocket').click();
    expect(rocketControl.launchRocket).toHaveBeenCalled();
  });

  it('steers the rocket left when the left button is pressed', () => {
    spyOn(rocketControl, 'steerLeft');
    $('.steer-left').click();
    expect(rocketControl.steerLeft).toHaveBeenCalled();
  });

  it('steers the rocket right when the right button is pressed', () => {
    spyOn(rocketControl, 'steerRight');
    $('.steer-right').click();
    expect(rocketControl.steerRight).toHaveBeenCalled();
  });
});
