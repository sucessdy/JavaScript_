// function a () {
//     console.log("a")

// }
// a()

// console.log("End")

// event loop check and take the function to the call stack check whether ar call stack is empty.

// event loop is like a gate keeper, its we have something in our call back queue , if yes then its;s quickly excute the code and

// when ever  a js function is run, a global excution is created

// console.log("Start"
// )

// document.getElementById("btn")
// addEventListener("click" , function cb() {
//     console.log("button")
// })

// console.log("end")

// we click our click hanlder in our
//  suppose we click on the click handler and then

const myPromise = new Promise((res, rej) => {
  document.getElementById("btn").addEventListener("click", () => {
    console.log(Promise.resolve("myPromise"));

    res("myvalue");
  });
});

myPromise.then((res) => console.log(res));

// function name() {}
// console.log(typeof name);

// class myClass {}
// console.log(typeof myClass);

console.log("start");
