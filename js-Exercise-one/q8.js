// Write a program that takes a number and calculates the sum of all numbers from 1 to that number 

let sumCount =(a)=>{
     let sum =0;
     for(let i =0;i<=a;i++)
     {
          sum +=i;
     }
     return sum;
}
console.log(sumCount(2));