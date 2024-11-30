export default function setFromArray(data) {
  const newSet = [...new Set(data)];
  return newSet;
}
