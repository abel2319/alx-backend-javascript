const express = require('express');
const students = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  await students(process.argv[2]).then((data) => {
    res.write(`Number of students: ${data.arr.length - 2}\n`);
    res.write(`Number of students in CS: ${data.csStud.length}. List: ${data.csStud.join(', ')}\n`);
    res.write(`Number of students in SWE: ${data.sweStud.length}. List: ${data.sweStud.join(', ')}`);
  }).catch((err) => res.write(err.message))
    .finally(() => {
      res.end();
    });
});

app.listen(port, () => {
  console.log(`Server app listening on port port ${port}`);
});

module.exports = app;
