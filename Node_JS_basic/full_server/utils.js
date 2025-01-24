const fs = require('fs');

async function readDatabase(path) {
  try {
    const data = fs.readFile(path, { encoding: 'utf-8' });
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const rows = lines.slice(1); // Exclude the header

    for (const row of rows) {
      const columns = row.split(',');
      const studentName = columns[0];
      const field = columns[3];
    
      if (field === 'CS') studentsCS.push(studentName);
      if (field === 'SWE') studentsSWE.push(studentName);
    }
    return {
      CS: studentsCS,
      SWE: studentsSWE,
    };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
