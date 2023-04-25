export default function cleanSet(set, startString) {
  const result = [];
  set.forEach((str) => {
    if (startString.length !== 0 && str.startsWith(startString)) {
      result.push(str.slice(startString.length));
    }
  });
  return result.join('-');
}
