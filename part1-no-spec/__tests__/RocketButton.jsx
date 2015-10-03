/**
 * IGNORE THIS STUFF WHEN WATCHING PRESENTATION,
 * IT'S NOT THAT IMPORTANT
 */
import React, {TestUtils} from 'react';
jest.dontMock('../RocketButton');
const actions = require('../actions');
const RocketButton = require('../RocketButton');



/*
 * THIS IS WHAT YOU NEED TO LOOK AT:
 */

describe('RocketButton', function(){
  beforeEach(function(){
    this.component = TestUtils.renderIntoDocument(<RocketButton/>);
  });

  it('should launch a rocket', function(){
    spyOn(actions, 'launchRocket');
  });
});
