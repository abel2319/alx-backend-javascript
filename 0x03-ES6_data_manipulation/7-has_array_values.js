export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) { throw new TypeError('set must be a Set'); }
  if (!(array instanceof Array)) { throw new Error('array must be a Array'); }

  return array.every((elt) => set.has(elt));
}
