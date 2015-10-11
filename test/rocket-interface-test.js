import $ from 'jquery';
import actions from '../src/rocket-actions';
import {state, renderRocketInterface} from '../src/rocket-interface';

describe('Rocket Interface', function(){
  beforeEach(function(){
    $('body').append(renderRocketInterface());
    state.hasLaunched = false;
  });

  it('should render a launch button', function(){
  });
});
