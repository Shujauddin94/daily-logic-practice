// Write a function to calculate the GCD of two numbers.
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
console.log(gcd(12, 18)); // Output: 6