// Naive approach (o(n2))

 function firstRecurringCharacter2(input){
   for(let i=0; i < input.length; i++){
       for(let j=i+1; j < input.length;j++) {
           if(input[i] === input[j]){
               return input[i];
           }
       }
   }
   return undefined;
 };
 
// Better approach (o(n))
function firstRecurringCharacter(input){
     let obj = {};
     for(let i = 0; i < input.length; i++) {
         if(obj[input[i]] !== undefined) {
             return input[i];
         } else{
             obj[input[i]] = i;
         }
     }
     return undefined;
}

// firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
let firstRchar =  firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
console.log(firstRchar);