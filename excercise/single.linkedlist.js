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
    this.unshift = unshift;
    this.insert = insert;
    this.shift = shift;
    this.removelastindex = removelastindex;
    this.removeByIndex = removeByIndex;
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


function unshift(val) {
let newNode = new Node(val);
let currentNode = this.head;
if(this.length === 0) {this.head = newNode; 
  this.tails = newNode;
  this.length++}
newNode.next = currentNode;
this.head = newNode;
this.length++;
return this;
};

function insert(index, val) {
if(index > this.length) {return undefined;}
else {
  let currentNode = this.head;
  let newNode = new Node(val);
  let count = 0
  while(count < index) {
     currentNode = currentNode.next;
     count++;
  }
  newNode.next = currentNode.next;
  currentNode.next = newNode;
  this.length++;
  return this;
}

};


function shift() {
 let currentNode = this.head;
 if(currentNode === null) {return undefined;}
 else {
   this.head = this.head.next;
   delete currentNode;
   this.length--;
 return this;
 }
};


function removelastindex() {
  let currentNode = this.head;
  let prevNode = null;
 if(this.length === 0) {return undefined};
 if(this.length == 1) {
   delete currentNode;
   this.head = null;
   this.length--;
 } else {
  while(currentNode.next !== null) {
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  prevNode.next = null;
  delete currentNode;
  this.length--;
 };
};

function RemovIndex(index) {
 if(index < 0 && index > this.length) {return undefined;}
 let i = 1;
 let currentNode = this.head;
 let nextNode = null;
 while( i < index-1) {
  currentNode = currentNode.next;
  i++;
 };
 nextNode = currentNode.next;
 currentNode.next = nextNode.next;
 delete nextNode;
 this.length--;
return this;
};

shift()
lastIndex();
byIndex();