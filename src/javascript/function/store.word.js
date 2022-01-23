function displayword() {
    this.storeword = [];
    this.forward = forward;
    this.backword = backword;
};

function forward(char) {
    let charlen = char.split(" ");
  for(let i=0; i < charlen.length; i++ ){
      this.storeword.push(charlen[i]);
  }
  return this.storeword;
};

function backword(char){
    let charlen = char.split(" ");
    for(let i=charlen.length-1; i >= 0; --i){
        this.storeword.push(charlen[i]);
    };
    return this.storeword;
};

let word = new displayword();
//  word.forward("hello world");
//  console.log(word.storeword);
word.backword("nice to meet you");
console.log(word.storeword);