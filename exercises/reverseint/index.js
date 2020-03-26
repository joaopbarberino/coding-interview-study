// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = '0';
    let aux = n * Math.sign(n);

    while (aux > 0) {
        reversed += aux % 10;
        aux = Math.floor(aux / 10);
    }
    return Number.parseInt(reversed) * Math.sign(n);
}

// function reverseInt(n) {
//     let reversed = n.toString().split('').reverse().join('');

//     return parseInt(reversed) * Math.sign(n);
//}

module.exports = reverseInt;
