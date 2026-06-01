// Write a function to calculate the GCD of two numbers.
function gcd(a, b) {
    if (b === 0) { // Base case: if the second number is 0, the GCD is the first number
        return a; // If the second number is 0, return the first number as the GCD
    }
    return gcd(b, a % b); // Recursive call with the second number and the remainder of the division of the first number by the second number
}
console.log(gcd(12, 18)); // Output: 6

// Another way to do it
function gcdRecursive(a, b) {
  if (b === 0) return Math.abs(a); // If the second number is 0, return the absolute value of the first number as the GCD
  return gcdRecursive(b, a % b); // Recursive call with the second number and the remainder of the division of the first number by the second number    
}
console.log(gcdRecursive(48, 18)); 