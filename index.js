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
    let unwantedNode = leaderNode.next;
    leaderNode.next = unwantedNode.next;    
    this.length--;
    return this.printList();
  }

}


/*const myLinkedList = new LinkedList(10);
//myLinkedList.append(15);
myLinkedList.append(25);
//myLinkedList.prepend(5);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
*/


class DoublyLinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null,
      prev: null
    };

    this.tail = this.head;
    this.length = 1;
    console.log(this);
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    console.log(newNode)
    newNode.prev = this.tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = {
      value: value,
      next: null,
      prev: null
    };

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value){
    const newNode = {
      value: value,
      next: null,
      prev: null
    }

    const leaderNode = this.traverseToIndex(index -1);
    const followerNode = leaderNode.next;

    leaderNode.next = newNode;
    newNode.prev = leaderNode;
    followerNode.prev = newNode;
    newNode.next = followerNode;
    this.length++;
    return this;
  }

  remove(index){

    let leader = this.traverseToIndex(index -1);
    let follower = leader.next;
    let holdingPointer = follower.next;
    leader.next = holdingPointer;
    holdingPointer.prev = leader;
    this.length--;
  }


  traverseToIndex(index){
    //check for index params
    let currentNode = this.head;
    let counter = 0;
    while(counter != index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList(){
    let array = [];
    let currentNode = this.head;

    while(currentNode != null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(20);
myDoublyLinkedList.append(30);
myDoublyLinkedList.prepend(0);
myDoublyLinkedList.insert(1,80);
myDoublyLinkedList.remove(3);
myDoublyLinkedList.printList();
