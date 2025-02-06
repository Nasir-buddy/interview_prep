function reversereachword(str) {
    var result = str.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
    return result;

}

console.log(reversereachword("My name is Nasir Ali, Residing in Greater Noida."));

