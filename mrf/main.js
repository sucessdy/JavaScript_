// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// function isEven(x) {
//   return x % 2 == 0;
// }
// const result = arr.filter(isEven);

// const result1 = arr.filter((x) => x % 2 == 0);

// console.log(result);
// console.log(result1);
// const result2 = arr.filter((x) => x % 3 == 0);
// console.log(result2);

// // reduce = where we need to iterate over the all the elements of the array and find a particular value

// const arrSum = [2, 45, 56, 77, 78];

// function findSum(arrSum) {
//   let max = 0;
//   for (let i = 0; i < arrSum.length; i++) {
//     if (arrSum[i] > max) {
//       max = arrSum[i];
//     }
//   }
//   return max;
// }
// console.log(findSum(arrSum));

// // const output = arrSum.reduce((accc, curr) => )

// // this function takes two parameters
// const finalAnswer = arrSum.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(finalAnswer);

// const arrOne = [1, 3, 4, 4, 5, 66, 7, 78, 8, 76, 6, 4, 4, 4, 44, 4, 0];
// const result3 = arrOne.reduce(function (max, curr) {
//   if (max > curr) {
//     max = curr;
//   }

//   return max;
// }, 0);

// console.log(result3);

const user = [
  { firstName: "Jonh", lastName: " Smith", age: 24 },
  { firstName: "Anna", lastName: " Smith", age: 24 },
  { firstName: "Pal", lastName: " Smith", age: 24 },
  { firstName: "David", lastName: " Smith", age: 24 },
];

const solution = user.reduce(function (acc, curr) {
  if (acc[curr.firstName] > 30) {
     acc[curr.firstName] = ++ acc[curr.firstName];
  } 
  return acc;
}, {});

console.log(solution);






// console.log(a)
// console.log(b)




