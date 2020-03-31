// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let results = []
    for (let i = 0; i < n; i++) {
        results.push([])
    }

    let counter = 1;

    let startCol = 0, startRow = 0;
    let endCol = n - 1, endRow = n - 1;

    // While they're not in the same position
    while (startCol <= endCol && startRow <= endRow) {
        // Top left to right
        for (i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        // Jump to next line
        startRow++;

        // Right top to down
        for (i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++;
        }
        // Reduce line size, as the end is already filled
        endCol--;

        // Bottom right to left
        for (i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        // Reduce table size, as the last line is already filled
        endRow--;

        // Left bottom to top
        for (i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter;
            counter++;
        }
        // Reduce line size, as the beginning is already filled
        startCol++;
    }

    return results
}


module.exports = matrix;
