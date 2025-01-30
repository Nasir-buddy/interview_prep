function reverse(num){
    var rev = 0;
    while(num != 0){
        var rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev;
}

// from method
function reverseMethod(num){
    return Number(num.toString().split("").reverse().join(''));
}   
// console.log(reverse(123));
console.log(reverseMethod(123));
