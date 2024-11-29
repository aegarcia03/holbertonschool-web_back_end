export default function getStudentsByLocation(data, city) {
  const cityfilter = data.filter((student) => student.location === city);
  return cityfilter;
}
