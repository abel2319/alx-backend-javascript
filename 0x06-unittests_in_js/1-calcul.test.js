const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test for calculateNumber function', () => {
  describe('Operation type', () => {
    it('Past a NaN as type to the function', () => {
      assert.throws(() => { calculateNumber(undefined, 1, 0) }, Error, /Type must be a string/);
    });
    it('Past a NaN to the function', () => {
      assert.throws(() => { calculateNumber(8, 0, 0) }, Error, /Type must be a string/);
    });
    it('Past a NaN to the function', () => {
      assert.equal(calculateNumber('Test', 0, 0), 'Type must be SUM, SUBTRACT or DIVIDE');
    });
  });
  describe('SUM', () => {
    it('sum of integer', () => {
      assert.equal(calculateNumber('SUM', 1, 2), 3);
    });
    it('sum of an integer and a float', () => {
      assert.equal(calculateNumber('SUM', 1, 2.8), 4);
    });
    it('Should round each value before sum them', () => {
      assert.equal(calculateNumber('SUM', 1.8, 2.8), 5);
    });
    it('Should round strictly each value before sum them', () => {
      assert.equal(calculateNumber('SUM',1.4999, 2.499), 3);
    });
  });
  describe('SUBTRACT', () => {
    it('subtract two of integer', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 2), -1);
    });
    it('subtract of an integer and a float', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 2.8), -2);
    });
    it('Should round each value before subtract them', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.8, 2.8), -1);
    });
    it('Should round strictly each value before subtract them', () => {
      assert.equal(calculateNumber('SUBTRACT',1.4999, 2.499), -1);
    });
  });
  describe('DIVIDE', () => {
    it('divide two of integer', () => {
      assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    });
    it('division of an integer and a float', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 4.8), 0.2);
    });
    it('Should round each value before divide them', () => {
      assert.equal(calculateNumber('DIVIDE', 1.8, 3.8), 0.5);
    });
    it('Should round strictly each value before divide them', () => {
      assert.equal(calculateNumber('DIVIDE',1.4999, 2.499), 0.5);
    });
    it('Division by 0', () => {
      assert.equal(calculateNumber('DIVIDE',1.4999, 0), 'Error');
    });
  });
});
