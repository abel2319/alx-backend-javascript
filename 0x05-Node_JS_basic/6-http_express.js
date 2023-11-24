const express = require('express');

const app = express();
const port = process.env.PORT || 1245;

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server app listening on port port ${port}`);
});
