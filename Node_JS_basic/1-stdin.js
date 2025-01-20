// Program to be executed through command line
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// The 'readable' event fires when there is data ready to be read from the stream.
// The 'data' event fires whenever data is available on the stream.
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) process.stdout.write(`Your name is: ${name}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
