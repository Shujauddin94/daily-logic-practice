// Write a function that reverses the digits of an integer.
function reverseInteger(num) {
    const isNegative = num < 0;
    const reversedNum = parseInt(Math.abs(num).toString().split('').reverse().join(''), 10); // Convert back to integer
    return isNegative ? -reversedNum : reversedNum;
}
console.log(reverseInteger(12345)); // Output: 54321

// Another way 
function reverseInteger(num) {
  const reversed = Math.abs(num) // Get absolute value
    .toString()
    .split('')
    .reverse()
    .join('');

  return Math.sign(num) * Number(reversed);
}
console.log(reverseInteger(-6789)); // Output: -9876
