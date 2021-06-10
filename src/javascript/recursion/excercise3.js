// Navie Solution

function Odd(value) {
    let result_odd = [];
    for (let i = 0; i < value.length; i++) {
        if (value[i] % 2 !== 0) {
            result_odd.push(value[i]);
        }
    }
    return result_odd;

};

// Odd([1, 2, 3, 4, 5]);


function OddReverse(value) {
    let total_odd = [];
    if (value.length === 0) {
        return total_odd;
    }
    if (value[0] % 2 !== 0) {
        total_odd.push(value[0]);
    }
    total_odd = total_odd.concat(value.slice(1));
    return total_odd;
};

OddReverse([1, 2, 3, 4, 5]);



