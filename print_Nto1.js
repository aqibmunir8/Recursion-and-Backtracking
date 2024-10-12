
// function print1toN (n){
//     console.log(n)
//     if(n>1){
//         print1toN(n-1)
//     }
//     console.log("Programm End")
// }



function print1toN (n){
    if(n === 0){
        return;
    }
    console.log(n);
    print1toN(n-1)
}


print1toN(5)