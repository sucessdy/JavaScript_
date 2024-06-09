// const number =  [1,3,3,4,5,]

// const doubleValue  = number.map((curEle) => 
// {
//  return curEle * 2
// })

// console.log(doubleValue)

// forEach  - Perform an action on each element 
// map -   Create a new array with a transformed element 


// push  - add from last 
// pop  - remove from last 
// shift  - remove from first 
// unshift  -  add from first



// const fruits = ["mango", "apple" , "pineapple" , "orange" , "strawberry"]

// console.log(fruits.push("plum")) // this return the length 
// console.log(fruits) 

// console.log(fruits.pop())
// console.log(fruits.unshift("watermelon"))
// console.log(fruits)
// console.log(fruits.shift())

// splice -  method for array 

// splice (start, deleteCount , item1 , item2 )

// const fruits = ["mango", "apple" , "pineapple" , "orange" , "strawberry"]
// console.log(fruits.splice(5, 0, "grapes"))
// console.log(fruits)

// console.log(fruits.splice(1, 1))
// console.log(fruits)


// includes   - true / false

// indexOF = return the first index  of the element]


// const num = [1,2,3,4,5, 1,3,6,7,8,9,0]
// console.log(num.indexOf(4))

// const result =  num.indexOf(1)
// console.log(result)

// const  result1 = num.lastIndexOf(1)

// console.log(result1)



let arr = [1,2,3,4,5]
let arr2= []; 
for (i =0 ; i<arr.length; i++){
   
  arr2[i] = arr[i];     
}
console.log(arr2)

const number = [1,2,3,4,5,6,7,8,9,10]
let prime = []
for (let i = 0; i < number ; i++){
    if(number % prime == 0 ){
        console.log('is a prime number')
    }else {
        console.log('its  not prime number ' )
    }
}


