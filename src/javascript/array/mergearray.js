function MergeArray(array1,array2) {
    let arrayItem1 = array1[0];
    let arrayItem2 = array2[0];
    let mergeArray = [];
    let i=1;
    let j=1;
    if(array1.length === 0) {return array2;}
    if(array2.length === 0) {return array1;}
    while(arrayItem1 || arrayItem2) {
    if(!arrayItem2 || arrayItem1 < arrayItem2) {
        mergeArray.push(arrayItem1);
        arrayItem1 = array1[i];
        i++;
    } else {
        mergeArray.push(arrayItem2);
        arrayItem2 = array2[j];
        j++;
    }
    }
    return mergeArray;
}

let marray = MergeArray([4,3,12], [1,2,3]);
console.log('marr', marray);