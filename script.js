function fib(n) {
    let fibArr = [1, 1];
    let sum = 0;
    for (i = 0; i < n - 2; i++) {
        sum = fibArr[i] + fibArr[i + 1];
        fibArr.push(sum);
    }
    return sum;
}

// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }

//     return b;
// }