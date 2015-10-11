//
// // A super simple DOM ready for React to render into
// // Store this DOM and the window in global scope ready for React to access
// global.document = jsdom.jsdom
// global.window = document.parentWindow;
//var jsdom = require('mocha-jsdom');
//jsdom();

var jsdom = require('jsdom');

// A super simple DOM ready for React to render into
// Store this DOM and the window in global scope ready for React to access
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;
