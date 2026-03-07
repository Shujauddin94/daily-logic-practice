// Write a function that takes a string and returns an object with the count of occurrence of each character.
function countCharacterOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;// Update the count for each character in the object
    }
    return charCount;
}
console.log(countCharacterOccurrences("hello world")); //{ h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// Another approach using Map
function countCharacterOccurrencesMap(str) {
    const charCountMap = new Map(); // Create a new Map to store character counts
    for (let char of str) {
        charCountMap.set(char, (charCountMap.get(char) || 0) + 1); // Update the count for each character in the Map
    }
    return charCountMap;// Return the Map containing character counts
}
console.log(countCharacterOccurrencesMap("hello world")); //Map(8) { 'h' => 1, 'e' => 1, 'l' => 3, 'o' => 2, ' ' => 1, 'w' => 1, 'r' => 1, 'd' => 1 }