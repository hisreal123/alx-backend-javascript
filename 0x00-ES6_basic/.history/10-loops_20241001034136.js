export default function appendToEachArrayValue(array, appendString) {
    const newArray = [];
  array.forEach(element => {
    for (var idx in array) {
      let value = array[idx];
      array[idx] = appendString + value;
    }
  });

  return array;
}
