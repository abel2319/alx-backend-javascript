const http = require('http');
const students = require('./3-read_file_async');

const host = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    students(process.argv[2]).then((data) => {
      res.write(`Number of students: ${data.arr.length - 2}\n`);
      res.write(`Number of students in CS: ${data.csStud.length}. List: ${data.csStud.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.sweStud.length}. List: ${data.sweStud.join(', ')}`);
      res.end();
    }).catch((err) => res.end(err.message));
  }
});

app.listen(port, host);
module.exports = app;
