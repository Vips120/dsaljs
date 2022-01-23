function Node(element) {
 this.element = element;
 this.next = null;
};

function LList() {
    this.head = null;
    this.tails = null;
    this.push = push;
    this.pop = pop;
    this.shift = shift;
    this.unshift = unshift;
    this.length = 0;
};


function push(element) {
   let newNode = new Node(element);
   if((this.head === null)) {
     this.head = newNode;
     this.tails = newNode;
   } else {
       this.tails.next = newNode;
       this.tails = newNode;
   }
   this.length++;
   return this;
};

function shift() {
if(this.head === null) {return undefined;}
let currentNode = this.head;
 this.head = currentNode.next;
 this.length--;
 return currentNode;
};

function unshift(element) {
  let newNode = new Node(element);
  let currentNode = this.head;
  if(currentNode === null){
    currentNode = newNode;
    this.tails = currentNode;
  }
    newNode.next = currentNode;
    currentNode = newNode;
  this.length++;
  return this;
}

//c ->80
// 50->60->80
//    
// t->c
// 50->60->80
 
function pop() {
  let currentNode = this.head;
  let newTails = currentNode;
  while(!(currentNode.next === null)) {
      newTails = currentNode;
      currentNode = currentNode.next;
  }
  this.tails = newTails;
  currentNode = null;
  this.length--;
  if(this.length === 0 ){
      this.head = null;
      this.tails = null;
  }
  return currentNode;
};


function getIndex(index) {
 if(index < 0 || index >= this.length) {return null;}
 let current = this.head;
 let counter = 0;
 while(counter!== index) {
   current = current.next;
   counter++
 };
 return current;
};
let list = new LList();
console.log(list.push(40));
// console.log(list.shift());