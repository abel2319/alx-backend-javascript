export default function createIteratorObject(report) {
  const array = [];
  for (const elt of Object.keys(report.allEmployees)) {
    array.push(...report.allEmployees[elt]);
  }
  return array[Symbol.iterator]();
}
