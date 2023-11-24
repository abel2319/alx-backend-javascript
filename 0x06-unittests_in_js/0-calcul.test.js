const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber: Sum of two numbers', () => {
  it('sum of integer', () => {
    assert.equal(calculateNumber(1, 2), 3);
  });
  it('sum of an integer and a float', () => {
    assert.equal(calculateNumber(1, 2.8), 4);
  });
  it('Should round each value before sum them', () => {
    assert.equal(calculateNumber(1.8, 2.8), 5);
  });
  it('Should round strictly each value before sum them', () => {
    assert.equal(calculateNumber(1.4999, 2.499), 3);
  });
  it('Past a NaN to the function', () => {
    assert.throws(() => { calculateNumber('Test', 1) }, Error, /All args must be numbers/);
  });
  it('Past a NaN to the function', () => {
    assert.throws(() => { calculateNumber(1, 'Test') }, Error, /All args must be numbers/);
  });
  it('Past a NaN to the function', () => {
    assert.throws(() => { calculateNumber('a', 'b') }, Error, /All args must be numbers/);
  });

});
