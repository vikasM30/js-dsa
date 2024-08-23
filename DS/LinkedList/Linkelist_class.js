class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size;
    }

    // O(1)
    prepend(value) {
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;  // head points to node or make newly added node as the head of the list
        } else {
            node.next = this.head;  // newly created node point at the head node
            this.head = node;       // head points to node or make newly added node as the head of the list
        }
        this.size++;
    }

    // O(n)
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;  // head points to node or make newly added node as the head of the list
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++;
    }

    print() {
        if(this.isEmpty()){
            console.log('Linked List is Empty!')
        } else {
            let curr = this.head   // make a temporary pointer current that points to the head
            let list = ''
            while(curr) {          // check till curr,next points to null
                list += `${curr.value} `;
                curr = curr.next;
            }
            console.log(list)
        }
    }
}

const llist = new LinkedList();
console.log(llist.isEmpty());
console.log(llist.getSize());
llist.print()
llist.prepend(10);
llist.prepend(20);
llist.print()
llist.prepend(30);
console.log(llist.isEmpty());
console.log(llist.getSize());
llist.print()
llist.append(80);
llist.print()