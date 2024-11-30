export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const result = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      const newValue = value.slice(startString.length);
      result.push(newValue);
    }
  });
  return result.join('-');
}
