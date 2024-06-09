// const number = [1,2,3,4,5,6,7,8,9]
// const result = number.includes(4)
// console.log(result)

// const months  = ['jan', 'feb', 'mar', 'apr ', ]
// months.splice(months.length , 0, "Dec")

// const indexToUpdate = months.indexOf("mar"); 
// months.splice(indexToUpdate, 2 , "Mar")
// console.log(indexToUpdate);
// console.log(months)

// months.splice(2, 1 )
// console.log(months)

// // filter
// const number2 = [1,2,3,4,5,6,7,8,9]
// const result1 = number2.map((curElem) => curElem * 5)

// console.log(result1)

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = num.map((curElem) => curElem * 5);

console.log(res);

const res2 = res.findIndex((curElem) => {
  return curElem > 10;
});

const res3 = res.filter((curElem) => {
  return curElem > 10;
});

console.log(res2);
console.log(res3);

let value = 6;
const number = [1, 2, 3, 4, 6, 6, 5, 6, 7, 8, 9];
let updateCart = number.filter((curElem) => {
  return curElem !== value;
});

console.log(updateCart);

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mobile", price: 900 },
  { name: "Tablet", price: 500 },
  { name: "Smartwatch", price: 120 },
];
let filterPrice = products.filter((curElem) => {
  return curElem.price <= 500;
});

console.log(filterPrice);

const numb = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
let uniqueValue =  numb.filter((curElem , index, arr) => {
    // console.log(index)
    // console.log(arr.indexOf(curElem))
    return arr.indexOf(curElem) === index; 
})
console.log(uniqueValue)

console.log([...new Set (number)])



//  sort and compare an Array 
const fruits = ["banana", "apple" , "orange","pineapple", "grapes"]
// const numbers = [1, 2,3,4,5,6,7,8,9, 8,3,4,4]
fruits.sort(); 
//  numbers.sort()
console.log(fruits)
// console.log(numbers)

// compare callback function  

// const sortedNumber = number.sort((a,b) => a -b)
// if (a > b) return 1 => switch the order 
// if (a < b) return -1 => keep the order 

const numbers = [1, 2,3,4,5,6,7,8,9, 8,3,4,4]
// const sortedNumber = numbers.sort((a,b) => a -b)
numbers.sort((a, b) => {
    if(a >b) return -1
    if(a < b) return 1
})
console.log(numbers)


const name = ["ram" , "sita" ,"laxman"]
const prefixName = name.map((curName) => `Mr. ${curName}`)

console.log(prefixName)