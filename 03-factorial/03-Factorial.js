function factorial(n){
    if(n===1){
        return 1;
    }
    return n * factorial(n-1);
}

let ans = factorial(5);
console.log(ans);