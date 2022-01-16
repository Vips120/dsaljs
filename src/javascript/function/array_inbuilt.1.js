function square(number) {
    console.log( `number:` + number * number);
};

let array = [1,3,4,5,6,7];
let S = array.forEach(square);
console.log(S);

// find even

function even(number) {
     return  number % 2 == 0;
};

let array = [1,2,3,4,5,6,10];
let result = array.every(even);
if(result) {
    console.log('all numbers are even')
} else {
    console.log('all numbers are not even');
}

/****
 * 
 * Filer odd or even
 */

function even(number) {
    return number %2 == 0;
};

function odd(number) {
    return number % 2 !== 0;
};

let array = [1,4,6,7,2,,6,20,495,60];
let numbersEven = array.filter(even);
console.log('all even numbers:' + numbersEven);
let numbersOdd = array.filter(odd);
console.log('all odd numbers:' + numbersOdd);