import readDatabase  from "../utils";

export default class StudentsController {
  static getAllStudents(reques, response) {
    const filename = process.argv[process.argv.length -1];
    let firstText = 'This is the list of our students';

    readDatabase(filename)
    .then((data) => {
      let studentCS = data.CS;
      firstText += `Number of students in CS: ${studentCS.length}. `;
      firstText += `List: ${studentCS.join(', ')}\n`;

      let studentSWE = data.SWE;
      firstText += `Number of students in SWE: ${studentSWE.length}. `;
      firstText += `List: ${studentSWE.join(', ')}\n`;

      response.status(200).end(firstText);
    })
    .catch((error) => {
      response.status(500).end(error.message);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const filename = process.argv[process.argv.length -1];
    readDatabase(filename)
    .then((data) => {
    })
    .catch((error) => {
      response.status(500).end(error.message);
    });
  }
}

module.exports = StudentsController;
