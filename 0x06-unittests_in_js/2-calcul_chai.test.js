const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('Test for calculateNumber function', () => {
  describe('Operation type', () => {
    it('Past a NaN as type to the function', () => {
      expect(calculateNumber.bind(undefined, 0, 0)).to.throw('Type must be a string');
    });
    it('Past a none str to the function throws Error Type must be a String', () => {
      expect(calculateNumber.bind(8, 0, 0)).to.throw('Type must be a string');
      expect(calculateNumber.bind([], 0, 0)).to.throw('Type must be a string');
      expect(calculateNumber.bind({}, 0, 0)).to.throw('Type must be a string');
    });
    it('Past a type none defned return Type must be SUM, SUBTRACT or DIVIDE', () => {
      expect(calculateNumber('Test', 0, 0)).to.equal('Type must be SUM, SUBTRACT or DIVIDE');
    });
  });
  describe('SUM', () => {
    it('sum of integer', () => {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });
    it('sum of an integer and a float', () => {
      expect(calculateNumber('SUM', 1, 2.8)).to.equal(4);
    });
    it('Should round each value before sum them', () => {
      expect(calculateNumber('SUM', 1.8, 2.8)).to.equal(5);
    });
    it('Should round strictly each value before sum them', () => {
      expect(calculateNumber('SUM', 1.4999, 2.4999)).to.equal(3);
    });
  });
  describe('SUBTRACT', () => {
    it('subtract two of integer', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
    });
    it('subtract of an integer and a float', () => {
      expect(calculateNumber('SUBTRACT', 1, 2.8)).to.equal(-2);
    });
    it('Should round each value before subtract them', () => {
      expect(calculateNumber('SUBTRACT', 4.3, 1.8)).to.equal(2);
    });
    it('Should round strictly each value before subtract them', () => {
      expect(calculateNumber('SUBTRACT', -4.4999, -5.4999)).to.equal(1);
    });
  });
  describe('DIVIDE', () => {
    it('divide two of integer', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });
    it('division of an integer and a float', () => {
      expect(calculateNumber('DIVIDE', 1, 4.8)).to.equal(0.2);
    });
    it('Should round each value before divide them', () => {
      expect(calculateNumber('DIVIDE', 1.8, 3.8)).to.equal(0.5);
    });
    it('Should round strictly each value before divide them', () => {
      expect(calculateNumber('DIVIDE', 1.4999, 2.4999)).to.equal(0.5);
    });
    it('Division by 0 must return Error', () => {
      expect(calculateNumber('DIVIDE', 1.4999, 0)).to.equal('Error');
    });
  });
});

