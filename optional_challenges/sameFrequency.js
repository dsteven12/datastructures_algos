function sameFrequency(int1, int2){
    let str1 = int1.toString();
    let str2 = int2.toString();

    if(str2.length !== str1.length) {
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 = {};
    
    for(let char of str1) {
        freqCounter1[char] = (freqCounter1[char] || 0) + 1;
    }
    
    for(let char of str2) {
        freqCounter2[char] = (freqCounter2[char] || 0) + 1;
    }
    
    for(let key in freqCounter1) {
        if(!(key in freqCounter2)) {
            return false;
        }
        if(freqCounter1[key] !== freqCounter2[key]) {
            return false;
        }
    }
    return true;
  // good luck. Add any arguments you deem necessary.
}

