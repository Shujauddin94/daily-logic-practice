// Write a function to find the missing number in an array of integers from 1 to n
function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // Output: 3

// Easier method

function findMissingNumber2(arr, n) {
    // Step 1: Calculate the expected sum from 1 to n
    let expectedSum = n * (n + 1) / 2;

    // Step 2: Calculate the actual sum of the array
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    // Step 3: The missing number
    return expectedSum - actualSum;
}
console.log(findMissingNumber2([1, 2, 4, 5], 5)); // Output: 3