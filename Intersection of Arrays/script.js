// Write a function to find the intersection of two arrays.
function intersection(arr1, arr2) {
    const set2 = new Set(arr2); // Convert second array to a Set for O(1) lookups
    return arr1.filter(item => set2.has(item)); // Return elements present in both arrays
}
console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]