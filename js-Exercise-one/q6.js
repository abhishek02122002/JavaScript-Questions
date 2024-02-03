// Write a program that takes a number and checks whether it is positive, negative, or zero.

let fun = function Check(a){
     if(a>0)
     {
          return "Positive";
     }
     else if(a<0){
          return "Negative";
     }
     else{
          return "Zero";
     }
}
console.log(fun(2));
console.log(fun(0));
console.log(fun(-2));