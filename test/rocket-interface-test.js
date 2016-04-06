import $ from 'jquery';
import rocketControl from '../src/rocket-control';
import {renderRocketInterface} from '../src/rocket-interface';

describe('rocket interface', () => {
  beforeEach(()=> $('body').append(renderRocketInterface()));

  it('launches the rocket when the launch is pressed', () => {
    const spy = spyOn(rocketControl, 'launchRocket');

    $('.launch-rocket').click();
    expect(spy).toHaveBeenCalled();
  });

  it('steers the rocket to the right when the steer right button is pressed', () => {
    const spy = spyOn(rocketControl, 'steerRight');

    $('.steer-right').click();
    expect(spy).toHaveBeenCalled();
  });

  it('steers the rocket to the left when the steer left button is pressed', () => {
    const spy = spyOn(rocketControl, 'steerLeft');

    $('.steer-left').click();
    expect(spy).toHaveBeenCalled();
  });
});
