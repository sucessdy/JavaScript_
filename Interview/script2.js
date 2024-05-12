// var variable = 10;
// (() => {
//   console.log(variable);
//   variable = 20;
//   console.log(variable);
// })(); // iifc immediately invoke function

// console.log(variable);
// var variable = 30;

// foo = 30
// console.log("foo", foo)
//  var foo = 90 ;

//  console.log("FOO", foo)

var variable = 10;
(() => {
  foo = 100;
  console.log(variable);
  var foo = 100;
  variable = 20;
  console.log(variable);
})(); // iifc immediately invoke function

console.log(foo);
console.log(variable);
var variable = 30;
