// Write a function to merge two sorted arrays into a single sorted array.
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]); // Add the smaller element to the merged array
            i++;
        } else {
            merged.push(arr2[j]); // Add the smaller element to the merged array
            j++;
        }
    }

    // Append any remaining elements from either array
    merged = merged.concat(arr1.slice(i)).concat(arr2.slice(j));
    return merged;
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

// Another way to do this
function mergeSortedArrays2(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements (if any)
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
console.log(mergeSortedArrays2([1, 2, 4], [1, 3, 4])); // Output: [1, 1, 2, 3, 4, 4]