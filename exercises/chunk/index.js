// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunkedArray = []
    let chunk = []

    for (let i = 1; array.length > 0; i++) {
        chunk.push(array.shift());

        if (i === size || array.length === 0) {
            chunkedArray.push(chunk);
            chunk = [];
            i = 0;
        }
    }

    return chunkedArray;
}

// Stephen solution
// function chunk(array, size) {
//     const chunked = [];
//     let index = 0;

//     while (index < array.length) {
//         chunked.push(array.slice(index, index + size));
//         index += size;
//     }

//     return chunked;
// }

module.exports = chunk;
