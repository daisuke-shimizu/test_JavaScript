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
  const times = Number(lines[0]);
  result = [];
  const openPrice = Number(lines[1].split(' ')[0]);
  const closePrice = Number(lines[times].split(' ')[1]);
  
//   console.log(result);
  let highPrices = [];
  let lowPrices = [];
  for (let i = 1; i <= times; i++) {
  
      highPrices.push(Number(lines[i].split(' ')[2]));
      lowPrices.push(Number(lines[i].split(' ')[3]));
  }
//   console.log(lowPrices);
  let highResult = highPrices.reduce(function(a, b) {
      return Math.max(a, b);
  });
  
  let lowResult = lowPrices.reduce(function(a, b) {
      return Math.min(a, b);
  });
  
  result.push(openPrice, closePrice, highResult, lowResult);
  console.log(result.join(' '));
});