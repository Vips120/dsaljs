function findUniqueValueArray(array) {
let i = 0;
if(array.length === 0) {return 0};
for(let j=1; j < array.length;j++) {
    if(array[i] !== array[j]) {
        i++;
        array[i] = array[j];
    }
}
return i+1;
};

let x = findUniqueValueArray([1,2,2,5,7]);
console.log(x)