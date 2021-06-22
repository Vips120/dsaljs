function getCount(num, count) {
    let n = Math.floor(Math.abs(num) / Math.pow(10, count)) % 10;
    return n;
};

// getCount(5432,1)
function digitCount(num) {
    if (num === 0) return 1;
    let n = Math.floor(Math.abs(Math.log10(num))) + 1;
    return n;
};

function mostDigit(nums) {
    let maxDigit = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(nums[i]));
    }
    return maxDigit;
};


function RadixSort(nums) {
    let maxdigitCount = mostDigit(nums);
    let binSize;
    for (let k = 0; k < maxdigitCount; k++) {
        binSize = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            binSize[getCount(nums[i], k)].push(nums[i]);
        };

        nums = [].concat(...binSize);
    };
    return nums;
};

RadixSort([23, 345, 5467, 12, 2345, 9852])