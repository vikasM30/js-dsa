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
    } else {
      node.next = this.head; // newly created node point at the head node
      this.head = node; // head points to node or make newly added node as the head of the list
    }
    this.size++;
  }

  insertAtIndex(value, index) {
    if (index < 0 || index > this.size) {
      console.log(
        `Cannot insert as either index ${index} is more than list length ${this.size} or less than 0`
      );
      return;
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeAtIndex(index) {
    let returnedValue;
    if (index < 0 || index > this.size) {
      console.log(
        `Cannot insert as either index ${index} is more than list length ${this.size} or less than 0`
      );
      return null;
    } else if(index === 0) {
        returnedValue = this.head;
        this.head = this.head.next;
    } else {
        let prev = this.head;
        for (let i = 0; i < index-1; i++) {
            prev = prev.next;
        }
        returnedValue = prev.next;
        prev.next = prev.next.next;
    }
    this.size--;
    return returnedValue
  }

  removeByValue(val) {
    if(this.isEmpty()){
        return null;
    } else if (this.head.value === val) {
        this.head = this.head.next;
        this.size--;
        return val
    } else {
        let prev = this.head;
        while (prev.next && prev.next.value !== val) {
            prev = prev.next
        }
        if(prev.next){
            const retVal = prev.next
            prev.next = prev.next.next;
            this.size--;
            return retVal.value
        }
        return 'value not exists.'
    }
  }

  search(val) {
    if(this.isEmpty()){
        return null
    }

    if(this.head.value === val) {
        return 'val found at index 0'
    } else {
        let curr = this.head
        let index = 0;
        while(curr){
            if (curr.value === val) {
                return `val found at index ${index}`
            }
            curr = curr.next
            index++;
        }
        return 'value not found'
    }
  }

  reverse(){
    if(this.isEmpty()){
        return null
    }

    let prev = null;
    let curr = this.head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr
        curr = next
    }
    this.head = prev
  }

  // O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node; // head points to node or make newly added node as the head of the list
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
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

const llist = new LinkedList();
console.log(llist.isEmpty());
console.log(llist.getSize());
llist.print();
llist.prepend(10);
llist.prepend(20);
llist.print();
llist.prepend(30);
console.log(llist.isEmpty());
console.log(llist.getSize());
llist.print();
llist.append(80);
llist.print();
llist.insertAtIndex(222, 111);
llist.print();
llist.insertAtIndex(222, 1);
llist.print();
console.log('removed value', llist.removeAtIndex(3));
llist.print();
console.log(llist.removeByValue(20));
llist.print()

console.log(llist.search(80));
llist.print()

llist.reverse()
llist.print()