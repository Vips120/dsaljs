function validAnagram(char1,char2) {
  if(char1.length !== char2.length) {
      return false;
  }
  let obj = {};
  for(let i=0; i < char1.length; i++) {
      let initialValue = char1[i];
      obj[initialValue] = obj[initialValue] ? obj[initialValue] +=1 : obj[initialValue] = 1;
  }
  for(let i=0; i < char2.length;i++) {
      let initialvalue = char2[i];
    if(!obj[initialvalue]){return false;} 
    else {
        obj[initialvalue] -=1;
    }
  }
  return true;
};

validAnagram('wow','wow');