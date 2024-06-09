"strict mode";
// what is factory function and the constructor function
// the main difference between the way we call the constructor function with the new keyword and the factory function with a normal function

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.length = 0;
// console.log(arr);
// output : 0

// Object.freeze() :  object not free, we can't change the properties that we're already assigned to the object ad we can't change the new properties

//  The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

const user = {
  id: 123,
  name: "John dene",
  age: 32,
  address: {
    city: " New Delhi",
    stat: "Delhi",
  },
};
Object.defineProperty(user, "id", {
  writable: false,
  configurable: false,
});


// debouncing  :  is that there is an event that is being triggered  
// throlling  

// function foo(a, ...rest, c) {
//     console.log(a, rest , c)
// } foo(1)


function foo(a, ...rest) {
    console.log(a, rest)
} foo(1)
