/* complex_code.js */

// This code demonstrates a complex implementation of the merge sort algorithm

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

 while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Generate a random array of 100 numbers
const arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 1000));
}

console.log("Original Array:");
console.log(arr);

const sortedArr = mergeSort(arr);

console.log("Sorted Array:");
console.log(sortedArr);
// End of code