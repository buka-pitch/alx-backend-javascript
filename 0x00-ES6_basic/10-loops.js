export default function appendToEachArrayValue(array, appendString) {
  for (let i of array) {
    let newarr = Array();
    newarr.push(appendString + array[i]);
  }

  return array;
}
