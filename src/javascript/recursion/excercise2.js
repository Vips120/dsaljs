function AddSum(num) {
    if (num === 1) return 1;
    return num + AddSum(num - 1);
};

let sum = AddSum(6);
console.log(sum);