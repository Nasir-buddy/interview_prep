// prototype inheritence
function abcd(){
    this.name = "nasir"
    this.age = 12
    this.email = "example@email.com"
}

abcd.prototype.printDets = function(){
    console.log(this.name, this.age, this.email);
}

new abcd();