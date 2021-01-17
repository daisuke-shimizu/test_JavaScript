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
  //console.log(lines[0]);
  let firstKg = Number(lines[0].split(' ')[0]);
  let p = Number(lines[0].split(' ')[1]);
  let q = Number(lines[0].split(' ')[2]);
  let result = (firstKg * (100 - p)/100)* (100 - q)/100;
  console.log(result);
});