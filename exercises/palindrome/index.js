// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return reversed === str;
}

function reverse(str, i = 0, reversed = '') {
    if (i < str.length - 1) {
        reversed = reverse(str, i + 1, reversed);
    }
    
    return reversed += str[i];
}

// function palindrome(str) {
//     const reversed = reverse(str);
//     return reversed === str;
// }

// function palindrome(str) {
//     return str.split('').every((char, i) => char === str[str.length - i - 1])
// }

module.exports = palindrome;
