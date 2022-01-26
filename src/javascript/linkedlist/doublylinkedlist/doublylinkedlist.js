function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
};

function Doublylinkedlist() {
    this.head = null;
    this.tails = null;
    this.length = 0;
    this.push = push;
    this.pop = pop;
};

function push(val) {
 let node = new Node(val);
  if(this.length === 0) {
      this.head = node;
      this.tails = node;
  } else {
      this.tails.next = node;
      node.prev = this.tails;
      this.tails = node;
  }
  this.length++;
  return this;
};


function pop() {
    if(this.head === null || this.tails === null || this.length === 0) {return undefined;}
    let currentTails = this.tails;
    if(this.length === 1) {
        this.head = null;
        this.tails = null;
    } else {
        this.tails = currentTails.prev;
        this.tails.next = null;
        currentTails.prev = null;
    }
    this.length--;
    return currentTails;

}

let list = new Doublylinkedlist();
