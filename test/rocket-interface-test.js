import $ from 'jquery';
import actions from '../src/rocket-actions';
import {renderRocketInterface} from '../src/rocket-interface';
console.log('actions', actions);

describe('Rocket Interface', function(){
	beforeEach(function(){
		renderRocketInterface('body');
	});

  it('should render correctly', function(){
		expect($('body').html()).toBe('<button class="launch-button">Launch Rocket</button>');
	});

	it('should launch a rocket when the launch button is clicked', function(){
		let spy = spyOn(actions, 'launchRocket');
		$('.launch-button').click();
		expect(actions.launchRocket).toHaveBeenCalled();
	});
});
