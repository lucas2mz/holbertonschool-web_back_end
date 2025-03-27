export default function appendToEachArrayValue(array, appendString) {
    const result_array = [];
    for (const i of array) {
        result_array.push(appendString + i);
    }
    return result_array;
  }