const number = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

let uniqueAnswer = number.filter((curElem, index, arr) => {
  // console.log(curElem)
  //  console.log(arr[index])
  // console.log(arr.indexOf(curElem));
  return arr.indexOf(curElem) === index;
});

console.log(uniqueAnswer);

console.log([...new Set(number)]);

const fruits = ["Bannan", "Apple", "Papaya", "Strawberry"];
fruits.sort();
console.log(fruits);

const sortedNumber = number.sort((a, b) => a - b);

number.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(number);

const num = [1, 2, 3, 4, 5];
let result = num.map((curElem) => {
  return curElem ** 2;
});
console.log(result);

const words = ["app", "laptop ", "computer", "phone"];
let output = words.map(
  (curEle) => curEle.charAt(0).toUpperCase() + curEle.substring(1)
);
console.log(output);

const no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let squareNumber = no
  .map((curEle) => {
    if (curEle % 2 === 0) {
      console.log(curEle * curEle);
    }
  })
  .filter((curEle) => curEle !== undefined);
// console.log(squareNumber)

// reduce method /
// Array.reduce (function callback (acc, curEle, index, arr) {

// })

const productPrice = [100, 200, 300, 400, 500];
// let totalPrice =  productPrice.reduce((acc, curEle) => {
//    return acc +  curEle
// }, 0)

const totalPrice = productPrice.reduce((accum, curEle) => {
  return accum + curEle;
}, 0);

console.log(totalPrice);
