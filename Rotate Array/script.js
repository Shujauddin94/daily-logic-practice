// Write a function to rotate elements in an array to the right by a given number of steps.
function rotateArray(arr, steps) {
    const len = arr.length; // Get the length of the array
    steps = steps % len; // Handle cases where steps > len
    return arr.slice(-steps).concat(arr.slice(0, len - steps)); // Rotate the array
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]