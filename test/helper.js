import $ from 'jquery';
beforeEach(function(){
  $('body').html('');
  restoreSpies();
});

afterEach(function(){
  $('body').html('');
  restoreSpies();
});
