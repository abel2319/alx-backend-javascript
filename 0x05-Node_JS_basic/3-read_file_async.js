const fs = require('fs');

async function countStudents(path) {
  let fileContent = null;
  try {
    fileContent = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // const fileContent = fs.readFileSync(path, 'utf8');
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
  return fileContent;
}

module.exports = countStudents;
