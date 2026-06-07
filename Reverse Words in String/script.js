// Write a function that reverses the order of words in a sentence.
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' '); // Split the sentence into words, reverse the array of words, and join them back into a string
}
console.log(reverseWords("Hello World from OpenAI")); // Output: "OpenAI from World Hello"

// This time its complex one with function and loop.
function reverseWords(sentence) {
  const words = sentence.trim().split(/\s+/); // Split by one or more spaces
  let result = []; // Initialize an empty array to hold the reversed words

  for (let i = words.length - 1; i >= 0; i--) { // Loop through the words array in reverse order
    result.push(words[i]); // Add words in reverse order
  }

  return result.join(" "); 
}


console.log(reverseWords("Hello world from JavaScript"));
// Output: "JavaScript from world Hello"