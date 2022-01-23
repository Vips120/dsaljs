function monthavgtemp() {

};

function weeklytemps(temps) {
  let total = 0;
  let week_avg = 0;
  for(let row=0; row < temps.length; row++){
      for(let column=0; column < temps[row].length;column++){
          total += temps[column];
      }
     week_avg = total / temps.length;
     console.log('week_avg:' + week_avg);
  }
};


// weeklytemps([[30,25,33],[22,23,25],[28,29,40]]);

function display() {
    this.storewords = [];
    this.addword = addWord;
    this.mergeword = mergeword;
};

function addWord(char) {
  this.storewords = [...this.storewords, char];
  return this.storewords;
};

function mergeword(words) {
    let char = '';
    for(let i=0; i < words.length;i++) {
        char +=words[i];
    }
    return char.toString();
};

let d = new display();
d.addword("hello");
d.addword("world");
d.addword("nice");
d.addword("to");
d.addword("meet");
d.addword("you");
console.log(mergeword(d.storewords));

