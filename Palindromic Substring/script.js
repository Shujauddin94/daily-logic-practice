// Write a function to count the number of palindromic substrings in a string.
function countPalindromicSubstrings(s) {
    let count = 0;
    const n = s.length; // Length of the string

    // Helper function to expand around center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < n && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }

    for (let i = 0; i < n; i++) {
        expandAroundCenter(i, i);     // Odd length palindromes
        expandAroundCenter(i, i + 1); // Even length palindromes
    }

    return count;
}
console.log(countPalindromicSubstrings("abba")); // Output: 6
console.log(countPalindromicSubstrings("abc"));  // Output: 3

// Another way to solve this problem

function countPalindromicSubstrings2(s) {
  let count = 0;

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) { // Check for palindrome
      count++;
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // Odd-length palindromes
    expand(i, i);
    // Even-length palindromes
    expand(i, i + 1);
  }

  return count;
}
console.log(countPalindromicSubstrings2("abba")); // Output: 6
console.log(countPalindromicSubstrings2("level"));  // Output: 7