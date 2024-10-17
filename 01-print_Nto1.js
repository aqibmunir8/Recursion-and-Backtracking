
// function printNto1 (n){
//     console.log(n)
//     if(n>1){
//         printNto1(n-1)
//     }
//     console.log("Programm End")
// }



function printNto1 (n){
    if(n === 0){
        return;
    }
    console.log(n);
    printNto1(n-1)
}


printNto1(5)