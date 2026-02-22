// Write a function that counts the number of words in a sentence.
function countWords(sentence) {
    // Split the sentence by spaces and filter out any empty strings
    const words = sentence.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}
console.log(countWords("Hello, how are you today?")); // Output: 6

// Another way to count words using regex
function countWordsRegex(sentence) {
    const words = sentence.match(/\b\w+\b/g); // Match words using word boundaries
    return words ? words.length : 0;
}
console.log(countWordsRegex("Hello, how are you today?")); // Output: 6