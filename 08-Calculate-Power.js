
// function pow(n, p){
//     if(p===1){
//         return n
//     }
//     return n * pow(n, p-1);
// }

// let ans = pow(2,3)
// console.log(ans);


function calcPower(num, exp){
    if(exp === 0){
        return 1;
    }
    if(exp === 1){
        return num;
    }
    // 4 --> 2
    // 5 --> 2
    const halfPower = calcPower(num, Math.floor(exp/2));
    if(exp % 2 === 0){
        return halfPower * halfPower;
    } else {
        return halfPower * halfPower * num;
    }
}



console.log(calcPower(2,9))