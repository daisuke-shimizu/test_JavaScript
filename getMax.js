const number1 = 103;
const number2 = 72;
const number3 = 189;


const getMax = (a, b, c)=>{
  let arr1 = [a, b, c];
  return Math.max.apply(null,arr1);
  
}


console.log(`最大値は${getMax(number1,number2,number3)}です`)