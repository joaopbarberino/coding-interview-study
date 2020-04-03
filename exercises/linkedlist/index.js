// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.insertAt(data, 0);
    }

    size() {
        let node = this.head;
        let counter = 0;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.getAt(0);
    }

    getLast() {
        let node = this.head;
        while (node && node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        // if (!this.head) {
        //     return;
        // }
        // this.head = this.head.next;
        this.removeAt(0);
    }

    removeLast() {
        // let prevNode = null;
        // let node = this.head;

        // if (!node) {
        //     return;
        // }

        // if (!node.next) {
        //     this.head = null;
        //     return;
        // }

        // while (node.next) {
        //     prevNode = node;
        //     node = node.next;
        // }

        // prevNode.next = null;
        this.removeAt(this.size() - 1);
    }

    insertLast(data) {
        // let lastNode = this.getLast();
        // let newNode = new Node(data, null);

        // if (lastNode) {
        //     lastNode.next = newNode;
        // } else {
        //     this.head = newNode;
        // }
        this.insertAt(data, this.size());
    }

    getAt(index) {
        let currIndex = 0
        let node = this.head;

        while (node) {
            if (currIndex === index) {
                return node;
            }
            node = node.next;
            currIndex++;
        }

        return null;
    }

    removeAt (index) {
        let prevNode = this.getAt(index - 1);

        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        
        if (!prevNode || !prevNode.next) {
            return;
        }
        prevNode.next = prevNode.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const prevNode = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prevNode.next);
        prevNode.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let currIndex = 0
        while (node) {
            fn(node, currIndex);
            node = node.next;
            currIndex++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
