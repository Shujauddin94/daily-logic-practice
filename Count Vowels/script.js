// Write a function that counts the number of vowels in a given string. 
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) { // Check if the character is a vowel
            count++; // Increment count if char is a vowel
        }
    }
    return count; // Return the total count of vowels
}
console.log(countVowels("Hello World")); // Output: 3


// Easier method using for off loop.

function countVowels(str) {
  const vowels = "aeiouAEIOU"; // String containing all vowels (both lowercase and uppercase)
  let count = 0; // Initialize count to 0

  for (const char of str) {  // for...of loop
    if (vowels.includes(char)) { // Check if the character is a vowel
      count++; // Increment count if char is a vowel
    }
  }

  return count; // Return the total count of vowels
}
console.log(countVowels("Hello")); // Output: 2