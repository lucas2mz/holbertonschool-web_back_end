export default function appendToEachArrayValue(array, appendString) {
  const result_array = [];
  for (const idx of array) {
    result_array.push(appendString + idx);
  }

  return result_array;
}
