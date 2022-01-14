function same(arr1,arr2) {
  if(arr1.length !== arr2.length) {
      return false;
  }
  let frequencepattern1 = {};
  let frequencepattern2 = {};
  for(let val of arr1) {
      frequencepattern1[val] = (frequencepattern1[val] || 0) + 1;
  };
  for(let val of arr2) {
      frequencepattern2[val] = (frequencepattern2[val] || 0) + 1;
  };
  for(let key in frequencepattern1) {
      if(!(key ** 2 in frequencepattern2)) {
          return false;
      }
      if(frequencepattern2[key ** 2] !== frequencepattern1[key]) {
          return false;
      }
  }

  console.log('frequencepattern1', frequencepattern1);
  console.log('frequencepattern2', frequencepattern2);
  return true;
};
let s = same([1,2,3],[4,1,9]);
console.log(s);