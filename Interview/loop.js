// let userInput;
// let positiveNumber;
// do { 
//   userInput = prompt("Please enter a valid positive number ");
//   positiveNumber = parseFloat(userInput);
// } while (isNaN(positiveNumber)|| positiveNumber < 0);

// console.log("u must need to enter a valid number", positiveNumber);

var  sum = 0 ; 
for (var i = 0; i <=10; i++){
 var sum = sum + i
}
console.log(sum)

let Leapyear = 2013; 
if(( Leapyear % 4  === 0 && Leapyear % 100 !==0 )  || Leapyear % 400 === 0){
    console.log('this is a leap Leapyear')
}else 

{
console.log("it's not a leap Leapyear ")
}

let pattern = 0 

for (let i = 0; i<= 5 ; i++){
    let pattern = " "
 for (let j =0 ; j<= i ; j++ ){
        pattern = pattern + "*"
    } 
    console.log(pattern)
}

function sum() {
var a = 9; 
b = 4; 
console.log(a + b)
}

sum()


