const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error(err));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== ''); // Split data into lines, ignoring empty ones

        const students = {};

        for (const line of lines) {
          const columns = line.split(',');
          const studentName = columns[0]; // First name of the student
          const field = columns[3]; // Field of study (4th column)

          // If the field does not exist, create it with the student's name as the first entry
          if (!students[field]) {
            students[field] = [studentName];
          } else {
            // If the field already exists, push the student's name into the array
            students[field].push(studentName);
          }
        }
        resolve(students); // Return the grouped students object
      }
    });
  });
}

module.exports = readDatabase;
