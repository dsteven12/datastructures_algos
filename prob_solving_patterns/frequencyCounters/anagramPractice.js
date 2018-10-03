//Write a function that determines if the second string is an anagram of the first. 
function anagram(str1, str2) {
    if(str2.length != str1.length) {
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
        
        if(freqCounter2[key] != freqCounter1[key]) {
            return false;
        }
    }
    return true;
}