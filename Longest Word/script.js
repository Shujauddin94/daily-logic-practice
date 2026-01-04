// Write a function that takes a sentence (string) and finds longest word.
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';          // Initialize with an empty string
    for (let word of words) {
        if (word.length > longestWord.length) {        // Compare lengths            
            longestWord = word;             // Update longestWord if current word is longer
        }
    }
    return longestWord;
}
console.log(findLongestWord("The cat tried to jump")); // Output: "tried"