function Pivot(arr, start = 0, end = arr.length + 1) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    };
    swap(arr, start, swapIdx);
    return swapIdx;
};

//Pivot([4, 8, 2, 1, 5, 7, 6, 3]);

function QuickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = Pivot(arr, left, right);
        QuickSort(arr, left, pivotIdx - 1);
        QuickSort(arr, pivotIdx + 1, right);
    };
    return arr;
};

QuickSort([10, 80, 30, 90, 40, 50, 70]);