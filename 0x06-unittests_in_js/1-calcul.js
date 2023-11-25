function calculateNumber(type, a, b) {
  if (type === undefined || typeof type !== 'string') {
    throw new Error('Type must be a string');
  }
  if (type === 'SUM')
    return Math.round(a) + Math.round(b);
  else if (type === 'SUBTRACT')
    return Math.round(a) - Math.round(b);
  else if(type === 'DIVIDE'){
    if (Math.round(b) === 0)
      return 'Error';
    
    return Math.round(a) / Math.round(b);
  }
  return 'Type must be SUM, SUBTRACT or DIVIDE';
}

module.exports = calculateNumber;
