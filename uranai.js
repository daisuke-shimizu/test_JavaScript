process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
//   console.log(lines[0]);
//   console.log(convertToInt('b'));
  let firstName = lines[0].split(' ')[0];
  let secondName = lines[0].split(' ')[1];
  let originalName = firstName+secondName;
  let swappedName = secondName+firstName;
  let arr1 = makeArr(originalName);
  let arr2 = makeArr(swappedName);
  let resultFirst = addArr(arr1);
  let resultSecond = addArr(arr2);
  
  if(resultFirst > resultSecond){
      console.log(resultFirst);
  }else{
      console.log(resultSecond);
  }
  
  
});





//alphabetという文字列を置いて、何番目のアルファベットかを表示する、indexOfメソッドを使用した
function convertToInt(a) {
const alphabet = "abcdefghijklmnopqrstuvwxyz";
return alphabet.indexOf(a) + 1 ;
}

function makeArr(str) {
    return str.split('');
}
function addArr(arr) {
    let processArr = [];
    for(let i = 1; i < arr.length; i ++){
      let firstI = convertToInt(arr[i -1]);
      let secondI = convertToInt(arr[i]);
    //   console.log(firstI + secondI);
      processArr.push(firstI + secondI);
  }
//   console.log(processArr);
  
  for(let l = 0; l< processArr.length; l ++){
      if (processArr.length > 1){
         processArr = addArrN(processArr);
      }
  }
 let result = Number(addArrN(processArr));
//  console.log(result);
 return result;
//   if(processArrN.length > 1){
//       addArrN(processArr);
//   }else{
//       console.log(processArr);
//   }
}

function addArrN(arr) {
    let processArrN = [];
    for(let j = 1; j < arr.length; j ++){
      let firstN = arr[j - 1];
      let secondN = arr[j];
      let sum = firstN + secondN;
     if(sum >= 101){
         sum -= 101;
         processArrN.push(sum);
     }else{
         processArrN.push(sum);
     }
      
  }
  return processArrN;
}
