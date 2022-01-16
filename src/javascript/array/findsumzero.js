// NAIVE SOLUTION
function findsumZero(array) {
 for(let i=0; i < array.length; i++) {
     for(let j = i+1; j < array.length;j++) {
         if(array[i] + array[j] === 0) {
             return[array[i], array[j]];
         }
     }
 }
};

// BEST APPROACH
function findsumZero1(array) {
  let left = 0;
  let right = array.length - 1;
  while(left < right) {
      let sum = array[left] + array[right];
      if(sum === 0) {
          return [array[left], array[right]];
      } else if(sum > 0) {
          right--;
      } else {
          left++;
      }
  };
};

findsumZero([-4,-3,-2,-1,0,5,10]);