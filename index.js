// Linked List Data strucute

class LinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
   // console.log(this);
  }

  append(value){
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = {
      value : value,
      next: null
    };

    newNode.next = this.head;
    this.head = newNode;        
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.append(5);
myLinkedList.append(25);
myLinkedList.prepend(20);
myLinkedList.prepend(5);