class Myarray {
    constructor(){
        this.count = 0;
        this.items = {};
    }

    //getData
    getData(item){
     return this.items[this.count] = item;
    };

    //push data
   push(data) {
    this.items[this.count] = data;
    this.count++;
    return this.items;
   };

   pop(){
     let deleteItem = this.items[this.count-1];
     return this.items;
   };

   // delete
   delete(index) {
       let item = this.items[index];
        this.shiftitem(index);
       return item;
   };

   shiftitem(index) {
       for(let i = index;  i < this.count-1; i++) {
          this.items[i] = this.items[this.count-1];  
       }
       delete this.items[this.count-1];
       this.count--;
   }
}


let array = new Myarray();
array.push(10);
array.push(20);
array.push(30);
array.push(40);
console.log(array.getData(0));
console.log(array.pop());
console.log(array.delete(2));
console.log(array);


