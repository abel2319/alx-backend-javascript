function calculateNumber(a, b) {
  if (a === undefined || typeof a !== 'number' ||
    b === undefined || typeof b !== 'number') {
    throw new Error('All args must be numbers');
  }
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
