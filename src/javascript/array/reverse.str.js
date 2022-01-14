function Reversetr(item) {
  let newArray = [];
  // let data = item.split('');
  let data = item;
  for(let i=data.length; i >= 0; i--) {
      let char = item[i];
    newArray = [...newArray,char];
  }
  return newArray.join('');
};


let rstr = Reversetr("Hi my name is vipul singh");
console.log('string', rstr);