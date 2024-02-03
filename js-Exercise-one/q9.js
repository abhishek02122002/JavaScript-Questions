// Write a program that takes a string and prints out the number of vowels in the string.

let vowelCount = (str)=>{
     // let lower = str.tolowercase();
     let count = 0;
     let arrayOfVowels = ['a','e','i','o','u'];
     for(let i =0;i<str.length;i++)
     {
          if(arrayOfVowels.includes(str[i].toLowerCase()))
          {
               count++;
          }
     } 
     return count;
}
console.log(vowelCount("JavaScript"));
console.log(vowelCount("Python"));
console.log(vowelCount("java"));
console.log(vowelCount("aeioU"));







