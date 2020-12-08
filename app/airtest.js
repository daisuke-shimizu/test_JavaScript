// function arraySame(arr1, arr2) {  
//   for(let j; j < arr1.length; j += 1) {
//     if(Object.prototype.toString.call(arr1[j]) ==='[object Array]'){
//       for(result of arr[j]){
//         arr1.push(result);
//       }
//       return arr1;
//     }
//   }
// }


// function arrayEqual2(arr1, arr2) {
//   if(){
//     return true;
//   }else{
//     return false;
//   }
// }
console.log(1 +1);
const g = [1,2,[3,4]];
const h = [1,2,[3,4]];
// console.log(arrayEqual2(g, h)); // true
console.log(arraySame(g,h));

const i = [1,2, [3,4,5]];
const j = [1,2, [4,4,5]]; 
// console.log(arrayEqual2(i, j)); // false

const k = [1,2, [3,4, [5,6]]];
const l = [1,2, [3,4, 5,[6]]];
// console.log(arrayEqual2(k, l)); // false
