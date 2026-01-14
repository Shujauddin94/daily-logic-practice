// Write a function to check if two strings are anagrams of each other.
function areAnagrams(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // If lengths are different, they can't be anagrams
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Sort characters and compare
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("Listen", "Silent")); // true
console.log(areAnagrams("Hello", "World"));   // false

