function InsertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        let j = i - 1;
        while (j > -1 && arr[j] > x) {

            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = x;
    };
    return arr;


};

InsertionSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]);