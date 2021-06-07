
// USING RECURSION
function Factorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * Factorial(num - 1);
};
let f = Factorial(4);
console.log(f);

//NAIVE SOLUTION

// function Fact(num) {
//     let total = 1;
//     for (let i = num; i > 0; i--) {
//         total = total * i;
//     }
//     return total;
// };

// let fc = Fact(4);
// console.log(fc);