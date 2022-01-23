function Node(element) {
    this.element = element;
    this.next = null;
};

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.previous = previous;
    this.remove = remove;
    this.display = display;
};


function find(element) {
 let currNode = this.head;
 while(currNode.element !== element) {
     currNode = currNode.next;
 }
 return currNode;
};

function insert(newelement, item) {
    let newnode = new Node(newelement);
    let currNode = this.find(item);
      newnode.next = currNode.next;
    currNode.next = newnode;

};

function display() {
    let currentNode = this.head;
    while(!(currentNode.next == null)) {
        console.log(`${JSON.stringify(currentNode)}`);
        currentNode = currentNode.next;
    }
};

function previous(element) {
  let currNode = this.head;
  while(!(currNode.next === null) && (currNode.next.element !== element)) {
      currNode = currNode.next;
  }
  return currNode;
};

 function remove(item) {
  let currentNode = this.previous(item);
  if(!(currentNode.next === null)) {
      currentNode.next = currentNode.next.next;
  }
 }

let llist = new LList();
llist.insert("jay", "head");
llist.insert("jayesh","jay");
llist.insert("manisha","jayesh");
llist.display(); 
llist.remove("manisha");
console.log('//////////////////////////////////////////////////////////////////');
llist.display();