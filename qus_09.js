const nasir = {
    name: "Nasir Ali",
    sayName: function(){
        console.log(this.name);
    }
}
setTimeout(nasir.sayName, 3 * 1000);
// console.log(nasir.sayName(nasir));
