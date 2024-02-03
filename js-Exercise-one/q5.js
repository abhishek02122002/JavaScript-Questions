// Write a program that displays a string in reverse order.

function stringReverse(str){
     let arrayFormed = str.split("");
     let revArr = arrayFormed.reverse();
     let  stringReversed = revArr.join("");
     return stringReversed;
};
console.log(stringReverse("Abhishek"))