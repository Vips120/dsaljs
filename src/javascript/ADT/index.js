function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.append = append;
    this.remove = remove;
     this.insert = insert;
    // this.front = front;
    // this.end = end;
    // this.prev = prev;
    // this.next = next;
    this.length = length;
    // this.currPos = currPos;
    // this.moveTo = moveTo;
    // this.getElement = getElement;
    this.length = length;
    // this.contains = contains;
};

// APPEND
function append(element) {
return this.dataStore[this.listSize++] = element;
};

//find
 function find(element) {
     
    console.log('this.datastore', this.dataStore);
  for(let i=0; i < this.dataStore.length; ++i){
   if(this.dataStore[i] === element) {
       return i;
   }
  };
  return -1;
 };

// REMOVE
function remove(element) {
    let f = this.find(element);
    if(f > -1) {
        this.dataStore.splice(f,1);
        --this.listSize;
        return true;
    }
    return false;
};

// length
function length() {
    return this.listSize;
};

// dataStore
function toString() {
    return this.dataStore;
};

// INSERT

function insert(element,after) {
 let f  = this.find(after);
 console.log(f);
 if(f > -1) {
     this.dataStore.splice(f,0,element);
     this.listSize++;
     return true;
 }
 return false;
}

let list = new List();

list.append("raj");
list.append("rahul");
list.append("jay");
console.log(list.toString());
list.remove("raj");
console.log(list.toString());
list.insert("raj", "rahul");
console.log(list.toString());

