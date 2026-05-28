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
console.log(subarraySum([1, 1, 1], 2)); 

// Another way to solve the problem using prefix sums and a hash map
function subarraySumAlternative(nums, k) {
    const prefixSumCount = new Map(); // This map will store the count of each prefix sum encountered
    prefixSumCount.set(0, 1); // Initialize the map with a prefix sum of 0 occurring once to handle cases where a subarray itself sums to k
    let currentSum = 0; // This variable will keep track of the current prefix sum as we iterate through the array
    let totalCount = 0;  // This variable will count the total number of subarrays that sum to k
    for (let num of nums) {
        currentSum += num; // Update the current prefix sum by adding the current number
        if (prefixSumCount.has(currentSum - k)) {
            totalCount += prefixSumCount.get(currentSum - k); // If the current prefix sum minus k exists in the map, it means there are subarrays that sum to k, so we add their count to the total
        }
        prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1); // Update the count of the current prefix sum in the map
    }
    return totalCount;// Return the total count of subarrays that sum to k
}
console.log(subarraySumAlternative([1, 2, 3], 3)); // Output: 2