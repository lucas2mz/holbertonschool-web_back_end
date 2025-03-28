export default function appendToEachArrayValue(array, appendString) {
  const resultArray = [];
  for (const idx of array) {
    resultArray.push(appendString + idx);
  }

  return resultArray;
}
