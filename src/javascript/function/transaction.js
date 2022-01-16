function checking(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
};

function deposit(amount) {
    this.balance += amount;
    return this.balance;
};

function withdraw(amount) {
  if(amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
  }
  if(amount > this.balance) {
    console.log('insufficent balance');
  }
};

function toString() {
    return `current balance is ${this.balance}`;
};


let c = new checking(1000);
console.log(c.balance);
console.log(c.deposit(1000));
console.log(c.withdraw(500));
console.log(c.toString());