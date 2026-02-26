// Write a function to generate the nth Fibonacci number.
function fibonacci(n) {
  if (n === 0) { // Base case: F(0) = 0
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next; // Update a and b to the next two Fibonacci numbers
  }

  return b;
}
console.log(fibonacci(10)); // Output: 55

// Now with full series generation

function fibonacciSeries(n) {
  let series = [0, 1]; // Initialize the series with the first two Fibonacci numbers

  for (let i = 2; i <= n; i++) {
    series.push(series[i - 1] + series[i - 2]); // Add next Fibonacci number to the series
  }

  return series; // Return the complete series
}
console.log(fibonacciSeries(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


