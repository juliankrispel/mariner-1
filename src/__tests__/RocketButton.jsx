/**
 * IGNORE THIS STUFF WHEN WATCHING PRESENTATION,
 * IT'S NOT THAT IMPORTANT
 */
import React, {addons, findDOMNode} from 'react/addons';

const {TestUtils} = addons;
jest.dontMock('../RocketButton');
const actions = require('../actions');
const RocketButton = require('../RocketButton');

/*
 * THIS IS WHAT YOU NEED TO LOOK AT:
 */

describe('RocketButton', function(){
  beforeEach(function(){
    this.component = TestUtils.renderIntoDocument(<RocketButton/>);
    this.domNode = findDOMNode(this.component);
  });

  it('should launch a rocket', function(){
    spyOn(actions, 'launchRocket');
    TestUtils.Simulate.click(this.domNode);
    expect(actions.launchRocket).toHaveBeenCalled();
  });
});
