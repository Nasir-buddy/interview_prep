// function occurence(str){
//     var occurance = {};
//     str = str.split('').map((item) => {
//         if(occurance.hasOwnProperty(item) === false){
//             occurance[item] = 1;
//         } else {
//             occurance[item]++;
//         }
//     })
//     return occurance;    
// }

function occurence(str){
    var occurence = {};
    str.split('').map((item) => { occurence.hasOwnProperty(item) ? occurence[item]++ : occurence[item] = 1; });
    return occurence;
}

console.log(occurence("Nasir Ali"));
