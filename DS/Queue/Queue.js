// here enqueue and dequeue both have O(n), i.e., linear time complexity....

class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(ele) {
        this.items.push(ele)
    }

    dequeue() {
        this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        return this.isEmpty() ? null : this.items[0]
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log('items: ', this.items.toString())
    }
}

const queue = new Queue();
console.log('initial queue (isEmpty): ', queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log('size on enqueue: ', queue.size())
queue.print()
console.log('peek: ', queue.peek())
queue.print()
console.log('size on peek: ', queue.size())
queue.dequeue()
console.log('size on dequeue: ', queue.size())
queue.print()
console.log('peek: ', queue.peek())