const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(path, 'utf8');
  const lines = fileContent.split('\n');
  const arr = [];
  lines.forEach((line) => {
    arr.push(line.split(','));
  });
  console.log(`Number of students: ${arr.length - 2}`);
  const csStud = [];
  const sweStud = [];
  arr.forEach((student) => {
    if (student.includes('CS')) csStud.push(student[0]);
    if (student.includes('SWE')) sweStud.push(student[0]);
  });
  console.log(`Number of students in CS: ${csStud.length}. List: ${csStud.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStud.length}. List: ${sweStud.join(', ')}`);
}

module.exports = countStudents;
