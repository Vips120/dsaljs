// Write a function which takes in string and returns count of each character of string



function charCount(str) {
  // store each character in obj
  let obj = {};
  let count = 0;
  while(count < str.length) {
      let countstr = 0;
      let key = str[count];
     if(obj[key]) {
         obj = {...obj, [key]: obj[key] + 1 }
     } else {
        obj = {...obj,[key]: countstr + 1}
     }
     count++;
  }
  return obj;
};



let char = charCount("Your Pin number is 1234");
console.log(char);
/***
 * {
 *   'y': 1,
 * 'o': 1,
 * 'u': 2
 *  'p':1
 * 'i':2
 * 'n':2
 *
 * 'b':1
 * 'e':1
 * 'r':2
 * 's':1
 * '1':1
 * '2':1
 * '3':1
 * '4':1
 * '5':1
 * }
 * 
 */