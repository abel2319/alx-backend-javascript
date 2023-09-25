export default function iterateThroughObject(reportWithIterator) {
  const str = [];
  for (const key of reportWithIterator) {
    str.push(key);
  }
  return str.join(' | ');
}
