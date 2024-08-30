const LinkedList = require('../Linkelist_with_tail');

class Stack_Using_Linkelist {

    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.prepend(value)
    }

    pop() {
        return this.list.removeFromFront()
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

const stack = new Stack_Using_Linkelist()
console.log('is empty: ', stack.isEmpty())
stack.push(20);
stack.push(40);
stack.push(240);
stack.print();
console.log('size: ', stack.getSize())
console.log('peek: ', stack.peek())
console.log('pop: ', stack.pop())
stack.print()