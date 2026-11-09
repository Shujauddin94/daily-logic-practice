// Write a function that takes a string as input and returns the string reversed.
function reverseString(str) { // Create a function that takes a string and reverses it
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // 
// split('') converts the string into an array of characters
// reverse() reverses the array
// join('')  joins the array back into a string