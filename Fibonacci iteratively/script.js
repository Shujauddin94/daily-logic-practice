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
