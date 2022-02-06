function Node(element, left,right) {
    this.data = element;
    this.left = left;
    this.right = right;
    this.show = show;
};
function show(){
    return this.data;
};

function Bst(){
 this.root = null;
 this.insert = insert;
 this.inOrder = inOrder;
};

function insert(data) {
    let n = new Node(data, null, null);
    if(this.root === null) {
        this.root = n;
    } else {
        let currentNode = this.root;
        let parentNode;
        while(true) {
            parentNode = currentNode;
            if(data < this.root.data) {
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
    }
    return this;
};

function inOrder(node){
  if(!(node === null)) {
      inOrder(node.left);
      console.log(node.show() + "");
      inOrder(node.right);
  }
};

let s = new Bst();
s.insert(10);
s.insert(5);
s.insert(30);
s.insert(1);
s.insert(40);
s.inOrder(s.root);