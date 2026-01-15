// Write a function that reverses the order of words in a sentence.
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}
console.log(reverseWords("Hello World from OpenAI")); // Output: "OpenAI from World Hello"