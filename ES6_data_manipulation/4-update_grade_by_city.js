export default function updateStudentGradeByCity(students, city, newGrades) {
  const filterStudents = students.filter((student) => student.location === city);
  const newStudentsList = filterStudents.map((student) => {
    const updatedGrades = newGrades.find((entry) => entry.studentId === student.id);
    const updatedStudent = { ...student };
    if (updatedGrades) {
      updatedStudent.grade = updatedGrades.grade;
    } else {
      updatedStudent.grade = 'N/A';
    }
    return updatedStudent;
  });
  return newStudentsList;
}
