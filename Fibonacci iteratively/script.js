// Write a funcion to generate the n-th Fibonacci number iteratively.
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1; // Base cases
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b; // Calculate the next Fibonacci number
        a = b; // Update a to the previous Fibonacci number
        b = temp; // Update a and b to the next two Fibonacci numbers
    }
    return b; // Return the n-th Fibonacci number
}
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10)); // Output: 55

// Another way using array to store Fibonacci numbers
function fibonacciArr(n) {
  if (n < 0) return null; // Handle negative input
  const fib = [0, 1]; // Initialize the first two Fibonacci numbers

  for (let i = 2; i <= n; i++) { // Start from the 2nd index and calculate Fibonacci numbers up to n
    fib[i] = fib[i - 1] + fib[i - 2]; // Calculate the i-th Fibonacci number and store it in the array
  }

  return fib[n]; // Return the n-th Fibonacci number from the array
}
console.log(fibonacciArr(6)); // Output: 8.
console.log(fibonacciArr(10)); // Output: 55