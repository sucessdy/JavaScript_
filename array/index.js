// array
// array is an object that's represented as a collection of a simliar type of elements
let arr = {};
console.log(typeof arr);

function object() {}
console.log(typeof object);



const anotherId = Symbol("123");
const Id = Symbol("123");

console.log(anotherId == Id);

// stack and heap memorys
// in the stack memory we use primitive 
// Heap  memory we use non primitive memory



let myName = "Mukta";

let myanotherName = myName; 

myanotherName = "Makku";
console.log(myName);
console.log(myanotherName);

let user = {
  email: "user",
  upi: "user@ybl",
};
let userTwo = user;
userTwo.email = "mukta@gmail.com";
console.log(userTwo.email);
console.log(user.email);

// array using construture 

let name = new Array("Apple", "Mango", "Banana", "pineapple");

console.log(name);

// array templete literal / 

let fruits = ["Apple", "Mango", "Banana", "pineapple"];
console.log(fruits);

fruits.forEach((curEle, index, array) => {
  console.log(`${curEle}: ${index}`);
  console.log(`${array}`);
});

// map

const myFruits = fruits.map((curEle, index, array) => {
  // console.log(`${curEle }: ${index}`)
  // console.log(`${array}`)
  return `${curEle}: ${index}`;
});

console.log(myFruits);

const myFruits1 = fruits.forEach((curEle, index, array) => {
  console.log(`${curEle}: ${index}`);
  console.log;
});

// splice method :

// method adding of array instances change the contents in the array by adding remmoving the           array

// splice( start , deletecount , item1 , items2 )

// findIndex

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

const resukt = nums.map((num) => {
  return nums * 2;
});
const nums2 = resukt.findIndex((num) => {
  return num > 34;
});
console.log(nums2);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
const result = numbers.indexOf((curElem) => {
  return curElem > 5;
});

let value2 = 7;

let work = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

const obj = { a: 1, b: 3 };

console.log(Reflect.has(obj, "a"));
console.log(Reflect.has(obj, "c"));


function doSomething(callback){
 callback()
}

doSomething(() => console.log("Callback function"))

//  const number = [1,2,3,4,5,6,7,8,9, 99]

 const doubleValue  = numbers.map((curEle) => 
 {
  return curEle * 2
 })

 console.log(doubleValue)