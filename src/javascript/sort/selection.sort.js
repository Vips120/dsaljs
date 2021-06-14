function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j + 1] < arr[min]) {
                min = j + 1;
            };
        };
        let temp;
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;

    }
    return arr;
};


SelectionSort([8, 1, 2, 3, 4, 5, 6, 7, -2])
