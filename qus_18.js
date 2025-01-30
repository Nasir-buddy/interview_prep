// function toLcase(str){
//     var newStr = str.split('')
//     .map((words) => words.charAt(0).toLowerCase()).join('');
//     return newStr;
    
// }




//My Name Is Nasir Ali.
// my name is nasri ali.






function toLcase (str){
    var newStr = str.split("")
    .map((words) => words.charAt(0).toLowerCase()).join('');
    console.log(newStr);

}

function reverseWord (str){
    var newStr = str.split('').reverse().join('');
    console.log(newStr);
    
}

// toLcase("My Name Is Nasir Ali");
reverseWord("hello")