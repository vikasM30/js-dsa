const LinkedList = require('../Linkelist_with_tail');

class Queue_Using_Linkelist {

    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) { // insert from end
        this.list.append(value)
    }

    dequeue() { // remove from front
        return this.list.removeFromEnd()
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.getSize()
    }

    print() {
        return this.list.print()
    }
}

const stack = new Queue_Using_Linkelist()
console.log('is empty: ', stack.isEmpty())
stack.enqueue(20);
stack.enqueue(40);
stack.enqueue(240);
stack.print();
console.log('size: ', stack.getSize())
console.log('peek: ', stack.peek())
console.log('dequeue: ', stack.dequeue())
stack.print()