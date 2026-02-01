// Given an array of integers, find the total number of continuous subarrays whose sum equals a specific target, K.
function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;
    const sumFrequency = {0: 1}; // Initialize with sum 0 occurring once
    for (let num of nums) {
        sum += num;
        if (sumFrequency.hasOwnProperty(sum - k)) {
            count += sumFrequency[sum - k];
        }
        sumFrequency[sum] = (sumFrequency[sum] || 0) + 1;
    }
    return count;
}
console.log(subarraySum([1, 1, 1], 2)); // Output: 2