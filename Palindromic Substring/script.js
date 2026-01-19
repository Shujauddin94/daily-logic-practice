// Write a function to count the number of palindromic substrings in a string.
function countPalindromicSubstrings(s) {
    let count = 0;
    const n = s.length;

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
