// Write a function to count the number of palindromic substrings in a string.
function countPalindromicSubstrings(s) { // Create a function that takes a string and counts the number of palindromic substrings
    let count = 0; // Initialize a counter for palindromic substrings
    const n = s.length; // Length of the string

    // Helper function to expand around center
    function expandAroundCenter(left, right) { // Create a helper function that takes two pointers (left and right) and expands around the center
        while (left >= 0 && right < n && s[left] === s[right]) { // Check if the characters at the left and right pointers are equal
            count++; // Found a palindrome, increment count
            left--; // Move left pointer to the left
            right++; // Move right pointer to the right
        }
    }

    for (let i = 0; i < n; i++) { // Loop through each character in the string
        expandAroundCenter(i, i);     // Odd length palindromes
        expandAroundCenter(i, i + 1); // Even length palindromes
    }

    return count; // Return the total count of palindromic substrings
}
console.log(countPalindromicSubstrings("abba")); // Output: 6
console.log(countPalindromicSubstrings("abc"));  // Output: 3

// Another way to solve this problem

function countPalindromicSubstrings2(s) { // Create a function that takes a string and counts the number of palindromic substrings
  let count = 0; // Initialize a counter for palindromic substrings

  function expand(left, right) { // Create a helper function that takes two pointers (left and right) and expands around the center
    while (left >= 0 && right < s.length && s[left] === s[right]) { // Check for palindrome
      count++; // Increment count for each palindrome found
      left--; // Move left pointer to the left
      right++; // Move right pointer to the right
    }
  }

  for (let i = 0; i < s.length; i++) { // Loop through each character in the string
    // Odd-length palindromes
    expand(i, i); // Expand around the center for odd-length palindromes
    // Even-length palindromes
    expand(i, i + 1);
  }

  return count; // Return the total count of palindromic substrings
}
console.log(countPalindromicSubstrings2("abba")); // Output: 6
console.log(countPalindromicSubstrings2("level"));  // Output: 7