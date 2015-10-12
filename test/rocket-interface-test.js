import $ from 'jquery';
import actions from '../src/rocket-actions';
import {renderRocketInterface} from '../src/rocket-interface';

describe('Rocket Interface', function(){
  describe('Rocket Launch Button', function(){
    it('should launch a rocket when clicked', function(){
      let spy = spyOn(actions, 'launchRocket');
      let el = renderRocketInterface();
      el.find('button.launch-rocket').click();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Steer Right Button', function(){
    it('should steer the rocket right', function(){
      let spy = spyOn(actions, 'steerRight');
      let el = renderRocketInterface();
      el.find('button.steer-right').click();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Steer Left Button', function(){
    it('should steer the rocket left', function(){
      let spy = spyOn(actions, 'steerLeft');
      let el = renderRocketInterface();
      el.find('button.steer-left').click();
      expect(spy).toHaveBeenCalled();
    });
  });

});
