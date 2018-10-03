function areThereDuplicates() {
    let freqCounter = {};
    for(let num of arguments) {
        freqCounter[num] = (freqCounter[num] || 0) + 1;
    }
    
    for(let key in freqCounter) {
        if(freqCounter[key] > 1) {
            return true;
        }
    }
    return false;
  // good luck. (supply any arguments you deem necessary.)
}

areThereDuplicates('a','b','c','a');