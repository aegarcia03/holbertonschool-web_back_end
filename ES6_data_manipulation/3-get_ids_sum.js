export default function getStudentIdsSum(data) {
  const sumid = data.reduce((acc, student) => acc + student.id, 0);
  return sumid;
}
