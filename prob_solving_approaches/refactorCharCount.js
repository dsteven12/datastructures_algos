function charCount(str) {
    newObj = {};
    for(var char of str) {
        if(isAlphaNumeric(char)) {
            char = char.toLowerCase();
            newObj[char] = newObj[char] ++ || 1;
        } 
    }
    return newObj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
            return false;
    }
    return true;
}