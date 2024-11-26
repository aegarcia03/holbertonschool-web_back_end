export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const newarray = [];
  for (const value of array) {
    newarray[idx] = appendString + value;
    idx += 1;
  }
  return newarray;
}
