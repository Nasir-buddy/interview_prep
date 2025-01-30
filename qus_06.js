for(let i = 0; i < 10; i++){
    setTimeout(()=> console.log(i), 1000);
} // 0 1 2 3 4 ...

for(var i = 0; i < 10; i++){
    setTimeout(()=> console.log(i), 1000);
} // 10 10 10 10 10