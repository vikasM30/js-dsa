// here enqueue and dequeue both have O(1), i.e., constant time complexity....

class Queue {

    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(ele) {
        this.items[this.rear] = ele;
        this.rear++;
    }

    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log('items: ', this.items)
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