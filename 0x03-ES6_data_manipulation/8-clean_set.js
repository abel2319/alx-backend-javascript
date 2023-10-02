export default function cleanSet(set, startString) {
  const string = [];
  if (!(set instanceof Set)) { throw new Error('set must be a Set'); }
  if (typeof startString !== 'string') { throw new Error('startString must be a String'); }

  if (startString !== '') {
    for (const elt of set) {
      if (elt.startsWith(startString)) {
        string.push(elt.substring(startString.length));
      }
    }
  }
  return string.join('-');
}
