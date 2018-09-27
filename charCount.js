function charCount(str) {
    str = str.toLowerCase();
    //Make obj to return at end
    newObj = {};
    //Loop over str, for each char...
    for(var i = 0; i < str.length; i++) {
      var char = str[i];
    //if char is something else(space, period, etc.) don't do anything.
        if(char.match("^[a-zA-Z0-9]+$")) {
        	 //if char is a number/letter AND a key in obj, add one to count.
          if(newObj[char] > 0) {
            newObj[char]++;
          //if char is a number/letter AND not in obj, add it to obj, and set value to 1.
          } else {
            newObj[char] = 1;
          }
        } 
    }
    //return object at end.
    return newObj;
}