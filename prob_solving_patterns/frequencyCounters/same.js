//same number of items must exist in both arrays.
//arrays order can be mixed up.

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        
    }
    for(let key in frequencyCounter1) {
        // If the the frequencyCounter1 keys squared isn't in frequencyCounter2, 
        // return false.
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // If the frequencyCounter2 values is not equal to frequencyCounter1 values,
        // return false. 
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    console.log(frequencyCounter1[val]);
    console.log(frequencyCounter2[val]);
    return true;
}