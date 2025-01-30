// closure
function parentFunction(){
    let a = 10;
    return function childFunction(){
        return a;
    }
}

const result = parentFunction();
console.log(result());

