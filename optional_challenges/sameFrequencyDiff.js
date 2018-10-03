function sameFrequency(int1, int2){
    let str1 = int1.toString();
    let str2 = int2.toString();

    if(str2.length !== str1.length) {
        return false;
    }

    let freqCounter1 = {};
    
    for(let char of str1) {
        freqCounter1[char] = (freqCounter1[char] || 0) + 1;
    }
    
    for(let char of str2) {
        if(!freqCounter1[char]) {
            return false;
        } else {
            freqCounter1[char] -=1;
        }
    }
  // good luck. Add any arguments you deem necessary.
}

