function Node(data, left,right) {
 this.data = data;
 this.left = left;
 this.right = right;
 this.show = show;
};

function show(){
    return this.data;
};

function BST() {
    this.root = null;
    this.insert = insert;

}

function insert(data) {
let n = new Node(data, null, null);
if(this.root === null) {
this.root = n;
} else{
let currentNode = this.root;
let parentNode;
 while(true){
  parentNode = currentNode;
  if(data < currentNode.data) {
      currentNode = currentNode.left;
      if(currentNode === null) {
          parentNode.left = n;
          break;
      }
  } else {
      currentNode = currentNode.right;
      if(currentNode === null) {
           parentNode.right = n;
           break;
      }
  }
}
 };
 
};

function inOrder(node) {
 if(!(node === null)) {

    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);

 };
};

function preOrder(node) {
    if(!(node === null)) {
        console.log(node.show() + " ");
        inOrder(node.left);
        inOrder(node.right);
    
     };
};

function getMin() {
  let currentnode = this.root;
  while(!(currentnode === null)){
      currentnode = currentnode.left;
  }
  return currentnode.data;
};

function getMax() {
    let currentNode  = this.root;
    while(!(currentNode === null)) {
        currentNode = currentNode.right;
    }
    return currentNode.data;
};

function  findData(data) {
 let currentNode = this.root;
   while(!(currentNode.data === data)) {
    if(data < currentNode.data) {
        currentNode = currentNode.left;
    } else {
        currentNode = currentNode.right;
    }
    if(currentNode === null) {
        return null;
    }
   }
   return currentNode;
};

let bst = new BST();
bst.insert(23);
bst.insert(10);
bst.insert(5);
bst.insert(45);
bst.insert(50);
bst.insert(100);
// inOrder(bst.root);
preOrder(bst.root);
