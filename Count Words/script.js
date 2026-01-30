// Write a function that counts the number of words in a sentence.
function countWords(sentence) {
    // Split the sentence by spaces and filter out any empty strings
    const words = sentence.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}
console.log(countWords("Hello, how are you today?")); // Output: 6