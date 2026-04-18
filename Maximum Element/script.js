// Write a function to find the maximum element in an array.
function findMax(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let max = arr[0]; // Initialize max with the first element
    for (let i = 1; i < arr.length; i++) { // Start loop from the second element
        if (arr[i] > max) { // Corrected comparison operator
            max = arr[i]; // Update max if current element is greater
        }
    }
    return max; // Return the maximum element found
}
console.log(findMax([3, 1, 4, 1, 5, 9, 2, 6, 5])); // Output: 9
console.log(findMax([])); // Output: null

// Easier method using Math.max and spread operator
function findMax2(arr) { // Function to find the maximum element using Math.max and spread operator
  return Math.max(...arr); // Spread the array elements as individual arguments to Math.max
}

console.log(findMax2([3, 7, 2, 9, 5])); // Output: 9