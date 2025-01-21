const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let responseMessage = 'This is the list of our students\n';
  try {
    const output = await countStudents(process.argv[2]);
    res.send(`${responseMessage}${output.join('\n')}`);
  } catch (error) {
    res.send(responseMessage += 'Cannot load the database');
  }
  res.send(responseMessage); // Send a single response
});

app.listen(PORT);

module.exports = app;
