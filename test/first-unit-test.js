var expect = require('expect.js');

function add(a, b){
  return a + b;
}

describe('add function', function(){
  it('should add two numbers correctly', function(){
    expect(add(2,1)).to.be(3);
  });
});
