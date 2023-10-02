export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) { return []; }
  const tmp = [];
  arr.map((elt) => tmp.push(elt.id));
  return tmp;
}
