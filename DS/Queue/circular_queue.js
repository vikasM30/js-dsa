class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0
    }
    enqueue(ele) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = ele;
            this.currentLength += 1;
            if (this.front == -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            return null
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if(this.isEmpty()) {
            this.rear = this.front = -1;
        }
        return item;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }

    print() {
        if(this.isEmpty()) {
            console.log('Circular Queue is empty!')
        } else {
            let i = 0;
            let str = '';
            for (i = this.front; i !== this.rear; i = (i+1)% this.capacity) {
                str += this.items[i] + ' ';
            }
            str += this.items[i]
            console.log(str)
        }
    }
}


const queue = new CircularQueue(3);
console.log('initial queue (isEmpty): ', queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
console.log('peek: ', queue.peek())
queue.print()
queue.dequeue()
queue.print()
console.log('peek: ', queue.peek())
queue.enqueue(50)
queue.print()