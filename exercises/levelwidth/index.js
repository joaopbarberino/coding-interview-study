// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const path = [root, 's'];
    const counters = [0];

    while (path.length > 1) {
        const node = path.shift();

        if (node === 's') {
            counters.push(0);
            path.push('s');
        } else {
            path.push(...node.children);
            counters[counters.length - 1]++;
        }
    }

    return counters;
}

module.exports = levelWidth;
