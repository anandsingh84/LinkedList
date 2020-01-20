// Linked List Data strucute

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  };
}

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
    const newNode = new Node(value);
    /*
    const newNode = {
      value: value,
      next: null
    };
    */
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = new Node(value);
    /*
    const newNode = {
      value : value,
      next: null
    };
    */
    newNode.next = this.head;
    this.head = newNode;        
    this.length++;
    return this;
  }

  printList(){
    const array = [];
    let currentNode = this.head;

    while(currentNode != null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value){
    // check params
    if(index >= this.length){
      return this.append(value);
    }

    if(index <= 0)
      return this.prepend(value);

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);    
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();    
  }

  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter != index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index){
    if(index >= this.length){
      //remove the last index
    }

    let leaderNode = this.traverseToIndex(index - 1);
    let holdingPointer = leaderNode.next;
    leaderNode.next = holdingPointer.next;
    holdingPointer.next = null;
    this.length--;
    return this.printList();
  }

}


const myLinkedList = new LinkedList(10);
//myLinkedList.append(15);
myLinkedList.append(5);
myLinkedList.append(25);
//myLinkedList.prepend(20);
//myLinkedList.prepend(5);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
//myLinkedList.printList();