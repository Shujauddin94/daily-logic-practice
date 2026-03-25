// Write a function to calculate the power of a number.
function calculatePower(base, exponent) {
    return Math.pow(base, exponent); // Using Math.pow to calculate power
}
console.log(calculatePower(2, 3)); // Output: 8

// Another way to do it using exponentiation operator.
function calculatePower2(base, exponent) { // Using exponentiation operator to calculate power
    return base ** exponent;   // Using exponentiation operator to calculate power
}
console.log(calculatePower2(2, 3)); // Output: 8
