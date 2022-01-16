class Newnode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Singlelinkedlist {
    constructor(value){
        this.head = {
          value:value,
          next: null
        }
        this.tail = this.head;
    }
    append(value) {
        let newlist = {
            value:value,
            next:null
        };
        this.tail.next = newlist;
        this.tail = newlist;

        return this;
    }; 
    prepend(value) {
        let newNode = {
            value:value,
            next:null
        };
        newNode.next = this.head;
        this.head =newNode;

    };
  printvalue() {
      let arrayList = [];
      let initialValue = this.head;
      console.log(initialValue);
     while(initialValue !== null) {
           arrayList.push(initialValue.value);
           initialValue = initialValue.next;
       }
      return arrayList;
  }

}


let myLinkedlist = new Singlelinkedlist(50);
myLinkedlist.prepend(1);
console.log(myLinkedlist.printvalue());
// console.log(myLinkedlist);
// myLinkedlist.append(16);
// myLinkedlist.append(20);
// console.log(myLinkedlist.head);
