export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number') { throw new Error('length must be a number'); }
  if (typeof position !== 'number') { throw new Error('position must be a number'); }
  if (typeof value !== 'number') { throw new Error('value must be a number'); }

  if (position >= length) { throw new Error('Position outside range'); }
  const ArrayBuffer = new Int8Array();

  return ArrayBuffer;
}
