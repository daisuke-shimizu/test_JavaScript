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
  const numTaxi = Number(lines[0].split(' ')[0]);
  const lengthDestination = Number(lines[0].split(' ')[1]);
  let resultArr = [];
  
  for (let i = 1; i <= numTaxi; i ++) {
      let firstLength = Number(lines[i].split(' ')[0]);
      let firstFare = Number(lines[i].split(' ')[1]);
      let addLength = Number(lines[i].split(' ')[2]);
      let addFare = Number(lines[i].split(' ')[3]);
      let totalPrice;
      if (lengthDestination < firstLength){
          totalPrice = firstFare;
          
      } else {
          let remainingLength = lengthDestination - firstLength;
          if (remainingLength === 0) {
              totalPrice = firstFare + addFare;
          }else {
          let addFareTimes = Math.ceil(remainingLength / addLength);
          if (addFareTimes * addLength + firstLength === lengthDestination) {
              totalPrice = firstFare + (addFare * (addFareTimes +1));
          }else {
          totalPrice = firstFare + (addFare * addFareTimes);
          }
          }
      }
      resultArr.push(totalPrice);
  }
  let minPrice = Math.min(...resultArr);
  let maxPrice = Math.max(...resultArr);
  console.log(`${minPrice} ${maxPrice}`);
});