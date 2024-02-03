// Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].

let arr1 = [1,2,3,4,5,6,7];
let arr2 = [10,2,3,40,5,67]
let arr3 =[];
function array(arr1 , arr2){
for(let v=0;v<arr1.length;v++){
     if(arr2.includes(arr1[v])){
          if(!arr3.includes(arr1[v])){
               arr3.push(arr1[v]);
          }
     }
}
}
// arrayFunction(arr1,arr2);
array(arr1,arr2);
arr3.sort((a,b)=>(a-b));
console.log(arr3);

