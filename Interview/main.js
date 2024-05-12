// console.log("A");

// // setTimeout(() =>  console.log("B" ) )

// const promise = new Promise(( resolve ) => setTimeout(resolve, 0))
 
// promise.then(() => console.log("B")) 

// ["C", "D"].forEach(x => console.log(x));

// console.log("E")


console.log("A");

const delay = () => new Promise(resolve => setTimeout(resolve, 0));

delay().then(() => console.log("B"));

["C", "D"].forEach(x => console.log(x));

console.log("E");
