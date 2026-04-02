// Write a function to calculate the factorial of a given number
function factorial(n) { // Step 1: Check if the number is negative
    if (n === 0) {
        return 1; // Base case: factorial of 0 is 1
    }
    return n * factorial(n - 1); // Recursive call to calculate factorial of n-1
}

console.log(factorial(5)); // Output: 120   
console.log(factorial(0)); // Output: 1 
// --------------------------------
// This is the easier way to do it using a loop which i understood more easily
function factorialloop(n) {
    // Step 1: Check if the number is negative
    // Factorial is not defined for negative numbers
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }

    // Step 2: Start with a result value of 1
    // This is because multiplying by 1 does not change the result
    let result = 1;

    // Step 3: Loop from 1 up to n
    for (let i = 1; i <= n; i++) {
        // Step 4: Multiply result by the current number
        // It will keep happening until we reach n best and easiest way to understand
        result = result * i;
    }

    // Step 5: Return the final result
    return result;
}
console.log(factorialloop(8)); // Output: 40320
console.log(factorialloop(-3)); // Output: Factorial is not defined for negative numbers