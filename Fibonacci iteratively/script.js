// Write a funcion to generate the n-th Fibonacci number iteratively.
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10)); // Output: 55

// Another way using array to store Fibonacci numbers
function fibonacciArr(n) {
  if (n < 0) return null;
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
}
console.log(fibonacciArr(6)); // Output: 8
console.log(fibonacciArr(10)); // Output: 55