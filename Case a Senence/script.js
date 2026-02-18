// Write a function that converts the first letter of each word in a sentence to uppercase.
function capitalizeWords(sentence) {
    let words = sentence.split(" "); // Split sentence into words
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); // Capitalize first letter
    }
    return words.join(" "); // Join words back into a sentence
}
console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"

// easier way better than for loop

function capitalizeWords2(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter using map
    .join(" "); // Join words back into a sentence
}
console.log(capitalizeWords2("hello world from javascript")); // Output: "Hello World From Javascript