// function print1toN(n, i=1){
//     if(i>n){
//         return
//     }
//     console.log(i)
//     print1toN(n, i+1);
// }

// print1toN(10);


function print1toN (n){
    if(n === 0){
        return;
    }
    print1toN(n-1)
    console.log(n);
}


print1toN(5)