// the idea  of Memoization is that u should Store the value of the previous result in memory if we call the function with the bunch of row in the many times with the same value is going to return the in other one immediately, so we caching the value. 

// const prevValue = [

// ]

// function store (n){
//     if(prevValue[n] != null){
//         return prevValue[n]
//     }

//     let sum = 0 ; 
//     for(let i = 0; i  < n; i++) {
//         for(let j = 0; j<n ; j++);
//         sum +=  1
    
//     }
//     prevValue[n] = sum 
//     return  sum
// }
// console.time()
// console.log(store(5000))
// console.log(store(5000))
// console.log(store(5000))
// console.log(store(5000))
// console.log(store(5000))
// console.log(store(5000))
// console.timeEnd()


// fibonacci number 

function fibonacci(n, prevValue = []) {
if(prevValue[n] != null){
    return prevValue[n]
}
    let result 
    if( n <= 2 ) {
       result =  1
    }

    else {
      result =  fibonacci(n -1, prevValue) + fibonacci(n -2, prevValue)
    }
prevValue[n] = result;
return result
}

console.log(fibonacci(300))