const fs = require('fs').promises;

async function readDatabase(path) {
  try {
    // Read the file content asynchronously
    const data = await fs.readFile(path, { encoding: 'utf-8' });
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const rows = lines.slice(1); // Exclude the header

    const studentsCS = []; // Initialize array for CS students
    const studentsSWE = []; // Initialize array for SWE students

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
};

module.exports = readDatabase;
