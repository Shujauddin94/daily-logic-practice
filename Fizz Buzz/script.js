// Write a function that returns a string, such as, For multiples of three, return "Fizz" instead of the number and for the multiples of five, return "Buzz". For numbers which are multiples of both three and five, return "FizzBuzz".
function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
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

  if (n % 3 === 0) result += "Fizz";
  if (n % 5 === 0) result += "Buzz";

  return result || n.toString(); // Return the result if it's not empty, otherwise return the number as a string
}
console.log(fizzBuzz2(10)); // Output: Buzz