// function fibonacci(n, no_of_times=1, a=0, b=1){
//     console.log(b)
//     if(n === no_of_times){
//         return b;
//     }
//     let temp = b;
//     b = b+a;
//     a=temp
//     return fibonacci(n, no_of_times+1, a, b);
// }

// let hello = fibonacci(10);


function fib(n){
    if(n<=1){
        return n;
    }

    return fib(n - 1) + fib(n - 2);  
}


console.log(fib(1))   //  0
console.log(fib(0))   //  1
console.log(fib(2))   //  1
console.log(fib(3))   //  2
console.log(fib(4))   //  3
console.log(fib(5))   //  5
console.log(fib(6))   //  8