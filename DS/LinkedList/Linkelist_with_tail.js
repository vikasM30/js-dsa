class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node; // head points to node or make newly added node as the head of the list
      this.tail = node; // tail points to node or make newly added node as the head of the list
    } else {
      node.next = this.head; // newly created node point at the head node
      this.head = node; // head points to node or make newly added node as the head of the list
    }
    this.size++;
  }

  // O(1)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node; // head points to node or make newly added node as the head of the list
      this.tail = node; // tail points to node or make newly added node as the head of the list
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  // O(1)
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  // O(n)
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Linked List is Empty!");
    } else {
      let curr = this.head; // make a temporary pointer current that points to the head
      let list = "";
      while (curr) {
        // check till curr,next points to null
        list += `${curr.value} `;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

// const llist = new LinkedList();
// console.log(llist.isEmpty());
// console.log(llist.getSize());
// llist.print();
// llist.prepend(10);
// llist.prepend(20);
// llist.prepend(30);
// llist.print();
// console.log(llist.getSize());
// llist.append(40);
// llist.append(50);
// llist.print();
// llist.removeFromFront()
// llist.print();
// llist.removeFromEnd()
// llist.print();

module.exports = LinkedList;