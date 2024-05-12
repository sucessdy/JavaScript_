// var result = 0.1 + 0.2

// console.log(result.toFixed(4))

console.log("4" + 3);

console.log(5 == 4);
console.log(5 == 4);

// equality opertor
// here we just checking the value, but when we console this line of code. we get true value, which doesn't make any sense. cuz we comparing the Number to the string value ...so we use triple equal
console.log(5 == "5");

console.log(5 === "5");

// not opeartor

console.log(5 != 7);
// bool(0) = false, bool(1) = true;
// Int(true) = 1
// Int(false) = 0

// console.log(2 <12 < 5)  true(expression evaluates from left to right )

let useAge = 32;
let isCitizen = false;
let isRegister = true;

if (useAge > 23) {
  if (isCitizen) {
    if (isRegister) {
      console.log("you are eligible to vote");
    } else {
      console.log("you are not eligible for citizen ship");
    }
  } else {
    console.log("You are not eligible for regisration ....");
  }
} else {
  console.log(" you are not eligible to vote( younger");
}

var num = 442;
if (num % 2 == 0) {
  console.log("it;s a even");
} else {
  console.log("it's not even");
}

console.log(num);

// var result = -23 ;
// if ( result === 0) {
//     console.log("it's zero")

// } else if ( result > 0 ){
//      console.log('its positive')
// }
//  else{
//     console.log( "it's negative")
//  }

//   switch statement

let areaShapes = "circle";
let a = 4;
let b = 8;
let result;
switch (areaShapes) {
  case "square":
    result = a * a;
    console.log(result)
    break;
  case "rectangle ":
    result = a * b;
    console.log(result)
    break;
  case "circle":
    var r = 2;
    result = 3.14 * (r * r);
    console.log(result)
    break;
  default:
    console.log("it's not match  ");
}


// while loop 

// code to be execute as long as the condition is true  
// first condition is check  

// do while loop  

// code to be executed at least once ... this check and enter at once  
// do while loop...we checking the condition after the code is executed at once .

//  for loop 

// for (initializer ; condition ; iteration)
// {
//   // code to be executed 
// }
for (let i = 1; i<=10 ; i++){
  console.log(i)
}
var num  = 2
while (num  <= 10) {
  console.log(num)
  num ++
}
var num =3
do {
   console.log(num)
   num ++
} while (num <= 23);

var i = 3
while (i<= 10){
  console.log(` 5 * ${i} = ${5 *i}`)
  i++
}

// // how we make the infinte loop 
// for (;;){
//   // update the game logic
//   console.log("hello")
// }


// calculate the sum of number from 1 to 10 

var sum = 0 ; 
 
for(var i = 1 ; i <= 10; i++){
  debugger;
  var sum = sum + i
}
console.log(sum)


//  write a program to check the prime number. 



console.log(typeof NaN)

console.log(8 )

console.log(0/0)
