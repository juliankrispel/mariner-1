import $ from 'jquery';
import actions from '../src/rocket-actions';
import {renderRocketInterface} from '../src/rocket-interface';

describe('Rocket Interface', function(){
	beforeEach(function(){
		$('body').append(renderRocketInterface());
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
	});
});
