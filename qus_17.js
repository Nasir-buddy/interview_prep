function stringPalCheck(str){
    var newStr = str.split('').reverse().join('');    
    return newStr === str ? true : false;
}

function stringrev(str){
    var i = 0; 
    var j = str.length - 1; 
    str = str.split('');

    while(i < j){
        var temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        i++;
        j--;
    }    
    return str.join('');
}
console.log(stringPalCheck("poop"));
console.log(stringrev("Nasir Ali"));
