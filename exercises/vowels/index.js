// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    withoutVowels = str.replace(/[aeiou]/gi, '');
    return str.length - withoutVowels.length;
}

// function vowels(str) {
//     let count = 0;
//     str.toLowerCase().split('').map(char => ['a', 'e', 'i', 'o', 'u'].includes(char) ? count += 1 : count += 0);
//     return count;
// }

// Stephen solution
// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
// }

module.exports = vowels;
