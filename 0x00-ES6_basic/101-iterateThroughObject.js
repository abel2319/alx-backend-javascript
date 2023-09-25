export default function iterateThroughObject(reportWithIterator) {
  let str = reportWithIterator.next().value;
  for (const key of reportWithIterator) {
    str += `| ${key}`;
  }
  return str;
}
