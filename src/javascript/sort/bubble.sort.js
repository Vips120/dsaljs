function BubbleSort(arr) {
    let flag;
    for (let i = 0; i < arr.length; i++) {
        flag = true;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp;
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = false;
            }
        };
        if (flag) { break; }
    };
    return arr;
};

BubbleSort([8, 1, 2, 3, 4, 5, 6, 7, -2]);