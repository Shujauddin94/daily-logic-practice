// Write a function to check if a given string is a palindrome
function isPalindrome(str) {
  const reversed = str.split('').reverse().join(''); // reverse the string
  return str === reversed; // true if palindrome, false otherwise
}


console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

// If you want to that ignores spaces, punctuation, and case, use this instead


function isPalindrome2(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}