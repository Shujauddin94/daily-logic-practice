// Write a function to validate whether a given string is a valid email address.
function isValidEmail(email) {
    // Regular expression for validating an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
console.log(isValidEmail("test@example.com"));// true
console.log(isValidEmail("invalid-email"));// false