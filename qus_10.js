var x = 10;
// x is from outer fuction
function run(){
    console.log(x);
    var x = 20; 
}
// running the function 
run();