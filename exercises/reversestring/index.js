// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// With built-in methods
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// Without built-in methods
// function reverse(str) {
//     const aux = str.split('');
//     str = '';
//     for (let i = aux.length - 1; i >= 0; i--) {
//         str += aux[i];
//     }

//     return str;
// }

// function reverse(str) {
//     let reversed = '';
    
//     for (let char of str) {
//         reversed = char + reversed;
//     }

//     return reversed;
// }

// With recursion
function reverse(str, i = 0, reversed = '') {
    if (i < str.length - 1) {
        reversed = reverse(str, i + 1, reversed);
    }
    
    return reversed += str[i];
}

module.exports = reverse;
