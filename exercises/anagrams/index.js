// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildCharMap(string) {
    const charMap = {}
    for (let char of string.split('')) {
        charMap[char] ? (charMap[char] += 1) : (charMap[char] = 1)
    }

    return charMap;
}

// function anagrams(stringA, stringB) {
//     const charMapA = buildCharMap(stringA.replace(/[^\w]/g, '').toLowerCase());
//     const charMapB = buildCharMap(stringB.replace(/[^\w]/g, '').toLowerCase());
//     let isAnagram = false,
//         charFounded = false

//     if (Object.keys(stringA).length !== Object.keys(stringB).length) {
//         return false
//     }

//     for (let charA in charMapA) {
//         charFounded = false
//         for (let charB in charMapB) {
//             if (charB === charA) {
//                 charFounded = true
//                 isAnagram = charMapA[charA] === charMapB[charB]
//             }
//         }

//         if (!charFounded) {
//             isAnagram = false
//         }
//     }

//     return isAnagram
// }

// Stephen solutions
// function anagrams(stringA, stringB) {
//     const charMapA = buildCharMap(stringA.replace(/[^\w]/g, '').toLowerCase());
//     const charMapB = buildCharMap(stringB.replace(/[^\w]/g, '').toLowerCase());

//     if (Object.keys(stringA).length !== Object.keys(stringB).length) {
//         return false
//     }

//     for (let char in charMapA) {
//         if (charMapA[char] !== charMapB[char]) {
//             return false;
//         }
//     }

//     return true;
// }

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

    stringA = stringA.split('').sort().join('');
    stringB = stringB.split('').sort().join('');

    return stringA === stringB;
}

module.exports = anagrams;
