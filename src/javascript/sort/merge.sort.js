/***
 * 
 * Merge sort between two sorted arrays
 */

function MergeSort(arr1, arr2) {
    let left = 0;
    let right = 0;
    let result = [];
    while (left < arr1.length && right < arr2.length) {
        if (arr1[left] < arr2[right]) {
            result.push(arr1[left]);
            left++;
        } else {
            result.push(arr2[right]);
            right++;
        }
    };
    while (left < arr1.length) {
        result.push(arr1[left]);
        left++
    };

    while (right < arr2.length) {
        result.push(arr2[right]);
        right++
    }
    return result;
};


// MergeSort([1, 10, 15, 20], [2, 14, 99, 100]);


/***
 * 
 * Recursive Merge Sort
 */


function RmergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let i = RmergeSort(arr.slice(0, mid));
    let j = RmergeSort(arr.slice(mid));
    return MergeSort(i, j);
};

RmergeSort([2, 99, 20, 14]);