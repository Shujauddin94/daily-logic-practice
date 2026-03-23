// Write a function to validate whether a given string is a valid email address.
function isValidEmail(email) {
    // Regular expression for validating an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); // This regex checks for a basic pattern of an email address: it must contain one "@" symbol, and at least one "." after the "@" symbol, with no spaces allowed.
}
console.log(isValidEmail("test@example.com"));// true
console.log(isValidEmail("invalid-email"));// false

// Another way to validate email addresses
function isValidEmail2(email) { // This regex checks for a more specific pattern of email addresses
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // This regex checks for a more specific pattern of email addresses
  return regex.test(email); // This regex checks for a more specific pattern of email addresses
}
console.log(isValidEmail2("test@example.com"));// true
console.log(isValidEmail2("invalid-email"));// it will return false because it does not match the pattern of a valid email address