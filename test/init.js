import expect, {spyOn, isSpy, createSpy} from 'expect';
import {jsdom} from 'jsdom';
var spies = [];

// A super simple DOM ready for React to render into
// Store this DOM and the window in global scope ready for React to access
global.expect = expect;
global.isSpy = isSpy;
global.createSpy = createSpy;
global.spyOn = function(){
  var spy = spyOn.apply(spyOn, arguments);
  return spy;
};
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
