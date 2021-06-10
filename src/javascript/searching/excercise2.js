function BinarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] < val) {
            left = mid + 1;
        } else if (arr[mid] > val) {
            right = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
};

BinarySearch([10, 15, 20, 25, 30], 15);