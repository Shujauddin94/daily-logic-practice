// Write a function that takes a string as input and returns the string reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
// split('') converts the string into an array of characters
// reverse() reverses the array
// join('') 