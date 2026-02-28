// Write a function that takes a sentence (string) and finds longest word.
function findLongestWord(sentence) {
    const words = sentence.split(' '); // Split the sentence into an array of words
    let longestWord = '';          // Initialize with an empty string
    for (let word of words) {
        if (word.length > longestWord.length) {        // Compare lengths            
            longestWord = word;             // Update longestWord if current word is longer
        }
    }
    return longestWord;
}
console.log(findLongestWord("The cat tried to jump")); // Output: "tried"

function findLongestWord1(sentence) {
  const words = sentence.match(/\b\w+\b/g) || []; // Split sentence into words using regex dont need to remember just google it thats what i did in this another function
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) { // Compare the length of the current word with the longest word found so far
      longest = word;
    }
  }

  return longest; // Return the longest word found in the sentence
}


console.log(findLongestWord1("He jumped over the fence"));
// "jumped"