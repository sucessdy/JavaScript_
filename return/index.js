const isPalindrone = (str) => {
  let palindrone = "";
  for (let char = str.length - 1; char >= 0; char--) {
    palindrone = palindrone + str[char];
  }
//   if (str === palindrone) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }

// str === palindrone ? console.log(true) : console.log(false);

return  str === palindrone ? true : false; 
//   return palindrone;
};
console.log(isPalindrone("radar"));
