// Write a function that takes a string and returns an object with the count of occurrence of each character.
function countCharacterOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
console.log(countCharacterOccurrences("hello world")); //{ h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }