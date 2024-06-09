let text = "Mukta kumari";
console.log(text.indexOf("kumari"));
let str = Array.from(text);
console.log(str);
// console.log(str.indexOf("Mukta"))

let strMap = str.map((curElem, index) => `${curElem} - ${index}`);
console.log(strMap);

let number = [0, 1, 2, 9, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(number.indexOf(3));

let strNum = Array.from(number);
let stringMap = strNum.map((curElem, index) => `${curElem} - ${index}`);
console.log(stringMap);

let words =
  "World best programming language is JavaScript and As  a develpoer I love JavaScript";

let indexs = words.indexOf("JavaScript");
let index = words.lastIndexOf("JavaScript");
let indexss = words.lastIndexOf("JavaScript", 40);
// this search backwards 

console.log(index)
console.log(indexs)
console.log(indexss)

// search =  it's not search backwards it's only give -1 when we not find the answer and  we can also search with regular expression 
let texts = "World best programming language is JavaScript and As  a develpoer I love JavaScript";
let output =  texts.search("JavaScript")
let outputs =  texts.search(/JavaScript/i);
console.log(output); 
console.log(outputs);


// let txt = "World best programming language is JavaScript and As  a develpoer I love JavaScript";
// let result =  txt.matchAll("JavaScript")
// // console.log(...result); 

// for(let item of result) {
//     console.log(item[0])
// }

let value = "World best programming language is JavaScript and As  a develpoer I love JavaScript"; 
let finalValue = value.includes("Java")
console.log(finalValue)

//  startsWith(): The startsWith() method returns a string beigns with first otherwise it will return the false 

const ttt = "world is best"
const test1 =  ttt.startsWith('world best')
console.log(test1)

// endsWith ,

// slice   

// extract the part of the string  and return the extracted part in a new string 
// it's not include the last indexEnd 
// 0 1 2 3 4 5 6 7 8 9 10 11
// m u k t  a  k u m a  r  i

// str.slice(1, 4)

let txts = "World best programming language is JavaScript and As  a develpoer I love JavaScript";

// let final = txts.slice(6)
// console.log(final)
let final = txts.slice(6, 33)
console.log(final)

// homework  
let world = 'Hello JavaScript, welcome to world best javaScript best courses'
let result = world.substring(0)
let result1 = world.substring(2)
let result2 = world.substring(-1)
let result3 = world.substring(11)
console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)

const resilt= world.replace("JavaScript", "Vinod") 
