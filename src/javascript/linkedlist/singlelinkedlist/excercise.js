function Node(element) {
    this.element = element;
    this.next = null;
};


function SLList() {
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
    this.length++;
  }
   else {
  this.head.next = node;
  this.tails = node;
  this.length++;
   }
  return this;
};

function pop() {
 let currentNode = this.head;
 let newTails = currentNode;
 while(currentNode.next !== null) {
     newTails = currentNode;
  currentNode = currentNode.next;
 }
 this.tails = newTails;
 currentNode = null;
 this.length--;
 if(this.length === 0) {
     this.head = null;
     this.tails = null;
 }
return this;
};
let llist = new SLList();
console.log(llist.push(40));