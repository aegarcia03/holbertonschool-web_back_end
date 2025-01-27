const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') res.end('Hello Holberton School!');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const output = await countStudents(process.argv[2]);
      res.end(`${output.join('\n')}`);
    } catch (error) {
      res.end('Cannot load the database');
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}: ${port}/`);
});

module.exports = app;
