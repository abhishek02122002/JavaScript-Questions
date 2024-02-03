// Write a program that takes a number and prints the multiplication table for that number.

let multable = function(a){
     let i =1;
     for(i;i<=10;i++){
          console.log(`value of ${a}*${i} is ${a*i}`);
     }
} 
console.log(multable(4));