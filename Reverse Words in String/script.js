// Write a function that reverses the order of words in a sentence.
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}
console.log(reverseWords("Hello World from OpenAI")); // Output: "OpenAI from World Hello"

// This time its complex one with function and loop.
function reverseWords(sentence) {
  const words = sentence.trim().split(/\s+/); // Split by one or more spaces
  let result = [];

  for (let i = words.length - 1; i >= 0; i--) {
    result.push(words[i]);
  }

  return result.join(" ");
}


console.log(reverseWords("Hello world from JavaScript"));
// Output: "JavaScript from world Hello"