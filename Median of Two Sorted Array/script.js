// Write a function to find the median of two sorted arrays.
function findMedianSortedArrays(nums1, nums2) {
    let merged = [];
    let i = 0, j = 0; // We initialize two pointers, i and j, to keep track of our current position in nums1 and nums2, respectively. We also create an empty array called merged to store the combined elements of both arrays.
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]); // If the current element of nums1 is smaller than the current element of nums2, we add it to the merged array and move the pointer i to the next element in nums1.
            i++; // We increment the pointer i to move to the next element in nums1.
        } else {
            merged.push(nums2[j]); // If the current element of nums2 is smaller than or equal to the current element of nums1, we add it to the merged array and move the pointer j to the next element in nums2.
            j++; // We increment the pointer j to move to the next element in nums2.
        }
    }
    while (i < nums1.length) {
        merged.push(nums1[i]); // If there are remaining elements in nums1 after one of the arrays has been fully traversed, we add them to the merged array.
        i++; // If there are remaining elements in nums1 after one of the arrays has been fully traversed, we add them to the merged array.
    }
    while (j < nums2.length) {
        merged.push(nums2[j]); // If there are remaining elements in nums2 after one of the arrays has been fully traversed, we add them to the merged array.
        j++; // If there are remaining elements in nums2 after one of the arrays has been fully traversed, we add them to the merged array.
    }
    let len = merged.length; 
    if (len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2; // If the total length of the merged array is even, the median is the average of the two middle elements. We access these elements using their indices, which are len / 2 - 1 and len / 2.
    } else {
        return merged[Math.floor(len / 2)]; // If the total length of the merged array is odd, the median is the middle element. We access this element using its index, which is Math.floor(len / 2).
    }
}
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5

// Another method using binary search this time it was dificult needed to use chatgpt

function findMedianSortedArrays(nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1); // We check if nums1 is larger than nums2. If it is, we call the function recursively with the arguments swapped. This ensures that nums1 is always the smaller array, which simplifies the logic for finding the median.
  }

  const x = nums1.length; // We store the lengths of nums1 and nums2 in variables x and y, respectively. This allows us to easily reference the lengths of the arrays throughout the function.
  const y = nums2.length; // We store the lengths of nums1 and nums2 in variables x and y, respectively. This allows us to easily reference the lengths of the arrays throughout the function.

  let low = 0; // We initialize low to 0, which represents the starting index of the partition for nums1. This means that initially, we are considering the possibility of having all elements of nums1 in the right half and none in the left half.
  let high = x; // We initialize low to 0 and high to the length of nums1, which represents the range of possible partition indices for nums1. We will use binary search to find the correct partition index for nums1.

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2); // We calculate the partition index for nums1 by taking the average of low and high. This gives us the index where we will partition nums1 into two halves.
    const partitionY = Math.floor((x + y + 1) / 2) - partitionX; // Ensure left half has one more element if total length is odd

    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1]; // If partitionX is 0, it means there are no elements on the left side of nums1, so we use -Infinity to ensure it doesn't affect the max calculation.
    const minRightX = partitionX === x ? Infinity : nums1[partitionX]; // If partitionX is equal to x, it means there are no elements on the right side of nums1, so we use Infinity to ensure it doesn't affect the min calculation.

    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];// If partitionY is 0, it means there are no elements on the left side of nums2, so we use -Infinity to ensure it doesn't affect the max calculation.
    const minRightY = partitionY === y ? Infinity : nums2[partitionY];

    // Correct partition found
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) { // If the maximum of the left half of nums1 is less than or equal to the minimum of the right half of nums2, and the maximum of the left half of nums2 is less than or equal to the minimum of the right half of nums1, it means we have found the correct partition.
      if ((x + y) % 2 === 0) {
        return (
          Math.max(maxLeftX, maxLeftY) + 
          Math.min(minRightX, minRightY) // We calculate the median by taking the average of the maximum of the left halves and the minimum of the right halves. We use Math.max to find the maximum of the left halves and Math.min to find the minimum of the right halves. Finally, we divide the sum by 2 to get the average, which is the median when the total length is even.
        ) / 2;    // If the total length is even, the median is the average of the maximum of the left halves and the minimum of the right halves.
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    }
    // Move left
    else if (maxLeftX > minRightY) { // If the maximum of the left half of nums1 is greater than the minimum of the right half of nums2, it means we need to move the partition in nums1 to the left, so we update high to partitionX - 1.
      high = partitionX - 1;  // If the maximum of the left half of nums1 is greater than the minimum of the right half of nums2, it means we need to move the partition in nums1 to the left, so we update high to partitionX - 1.
    }
    // Move right
    else {
      low = partitionX + 1; // If the maximum of the left half of nums1 is less than or equal to the minimum of the right half of nums2, but the maximum of the left half of nums2 is greater than the minimum of the right half of nums1, it means we need to move the partition in nums1 to the right, so we update low to partitionX + 1.
    }
  }
}
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5