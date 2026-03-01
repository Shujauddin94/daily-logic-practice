// Write a function that returns a string, such as, For multiples of three, return "Fizz" instead of the number and for the multiples of five, return "Buzz". For numbers which are multiples of both three and five, return "FizzBuzz".
function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz"; // Return "FizzBuzz" if n is a multiple of both 3 and 5
    } else if (n % 3 === 0) {
        return "Fizz"; // Return "Fizz" if n is a multiple of 3
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n.toString();
    }
}
console.log(fizzBuzz(15)); // Output: FizzBuzz

// Another shorter way

function fizzBuzz2(n) {
  let result = "";

  if (n % 3 === 0) result += "Fizz";// Append "Fizz" to the result if n is a multiple of 3
  if (n % 5 === 0) result += "Buzz"; // Append "Buzz" to the result if n is a multiple of 5

  return result || n.toString(); // Return the result if it's not empty, otherwise return the number as a string
}
console.log(fizzBuzz2(10)); // Output: Buzz