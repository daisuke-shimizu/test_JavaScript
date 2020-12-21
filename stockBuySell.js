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
  
  let saving = 0;
  let quantity = 0;
  let times = Number(lines[0].split(' ')[0]);
  let lower = Number(lines[0].split(' ')[1]);
  let higher = Number(lines[0].split(' ')[2]);
  let lastPrice = Number(lines[times]);
  for (i = 1; i < times; i++){
      let stockPrice = Number(lines[i]);
      if(stockPrice<= lower){
          quantity += 1;
          saving -= stockPrice;
      }else if(stockPrice >= higher && quantity >0){
          saving += stockPrice*quantity;
          quantity = 0;
      }
    //  console.log(saving);
  }
  if(quantity> 0 ){
      saving += quantity * lastPrice;
  }
  console.log(saving);
});