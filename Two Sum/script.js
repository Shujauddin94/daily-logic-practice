// Given an array of numbers and a target sum, find two numbers in the array that add up to the target and return their indexes.
function twoSum(numbers, target) {
    const numMap = new Map(); // Map to store numbers and their indices
    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i]; // Calculate complement
        if (numMap.has(complement)) { // Check if complement exists
            return [numMap.get(complement), i];  // Return indices of the two numbers
        }
        numMap.set(numbers[i], i); // Store number and its index
    }
    return null;
}
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// Easier method (less efficient)
function twoSumSlow(nums, target) {
  for (let i = 0; i < nums.length; i++) { // Loop through each number
    for (let j = i + 1; j < nums.length; j++) { // Loop through the numbers after the current number
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(twoSumSlow([2, 7, 11, 15], 9)); // Output: [0, 1]