// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        this.move(this.first, this.second);
        const record = this.second.pop();
        this.move(this.second, this.first);

        return record;
    }

    peek() {
        this.move(this.first, this.second);
        const record = this.second.peek();
        this.move(this.second, this.first);

        return record;
    }

    move(origin, dest) {
        while (origin.peek()) {
            dest.push(origin.pop());
        }
    }
}

module.exports = Queue;
