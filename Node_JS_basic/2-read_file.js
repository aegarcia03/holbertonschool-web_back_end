const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    // if (!data) {
    //  throw new Error('Cannot load the database');
    // }
    const lines = data.split('\n'); // Split into lines
    const nonEmptyLines = lines.filter((line) => line.trim() !== '');
    const rows = nonEmptyLines.slice(1); // remove the header

    console.log(`Number of students: ${rows.length}`);

    const studentCS = [];
    const studentSWE = [];

    for (const row of rows) {
      const studentData = row.split(','); // Split each row by commas
      if (studentData[3] === 'CS') {
        studentCS.push(studentData[0]);
      }
      if (studentData[3] === 'SWE') {
        studentSWE.push(studentData[0]);
      }
    }
    console.log(`Number of students in CS: ${studentCS.length}. List: ${studentCS.join(', ')}`);
    console.log(`Number of students in SWE: ${studentSWE.length}. List: ${studentSWE.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
