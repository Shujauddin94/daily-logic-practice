// Write a function to check if a given number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false; // divisible by 2 or 3 → not prime
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false; // divisible by i or i+2 → not prime
        }
    }
    return true; // if no divisors found, it's prime
}   
console.log(isPrime(11)); // true
console.log(isPrime(15)); // false

// Easier way

function isPrime2(n) { // Check if n is prime
  if (n < 2) return false; // 0 and 1 are not prime

  for (let i = 2; i < n; i++) { // check all numbers from 2 to n-1
    if (n % i === 0) {
      return false; // n is divisible by i → not prime 
    }
  }

  return true; // no divisors found → prime
}

console.log(isPrime2(2));  // true
console.log(isPrime2(3));  // true
console.log(isPrime2(4));  // false
console.log(isPrime2(5));  // true