// Write a function to calculate the GCD of two numbers.
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
console.log(gcd(12, 18)); // Output: 6

// Another way to do it
function gcdRecursive(a, b) {
  if (b === 0) return Math.abs(a);
  return gcdRecursive(b, a % b);
}
console.log(gcdRecursive(48, 18)); // Output: 6