const nasir = {
    name: "Nasir Ali",
    sayName: function () {
        console.log(this.name);
    },
};

const ali = {
    name: "syed ali",
    sayName: function(){
        console.log(this.name)
    },
};

ali.sayName.call(nasir);