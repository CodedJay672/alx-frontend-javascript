export default function appendToEachArrayValue(array, appendString) {
  const myArray = array;
  for (const idx of array) {
    const value = idx;
    myArray[array.indexOf(idx)] = appendString + value;
  }

  return array;
}
