// Program to be executed through command line
const process = require('node:process');

const args = process.argv.slice(2);

console.log('Welcome to Holberton School, what is your name?');
console.log(`Your name is: ${args[0]}`);
console.log('This important software is now closing');
