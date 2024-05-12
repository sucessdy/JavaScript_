console.log("hell yeah") 
for(let i = 0; i < 10 ; i++) {
    setTimeout( () => console.log(i) ,4444 )
}

for(var i = 0; i < 10 ; i++) {
    setTimeout( () => console.log(i) ,3333)
}

const promise =  new Promise((_resolve , _reject) => {
    setTimeout(( ) => console.log("Fooo ")  , 300 )
})
console.log("hello")

for(var i = 0; i < 10 ; i++) {
    setTimeout( () => console.log(i) ,4444 )
}
