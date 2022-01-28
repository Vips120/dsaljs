function Node(element) {
 this.element = element;
 this.next = null;
};

function Singlelist() {
    this.head = null;
    this.tails = null;
    this.length = 0;
    this.push = push;
    this.display = display;
};

function push(val) {
let newNode = new Node(val);
if(this.head === null) {
    this.head = newNode;
    this.tails = this.head;
}
 this.tails.next = newNode;
 this.tails = newNode;
 this.length++;
return this;
};

function display() {
if(this.length === 0) {return undefined;}
let currentNode = this.head;
if(this.length === 1) {return currentNode.element;}
let nodeCount = 0;
while(currentNode !== null) {
  
console.log(currentNode.element);
  currentNode = currentNode.next;
  nodeCount++;
};
console.log('toal node created ' + nodeCount);
};