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
  let flame = '+'.repeat(lines[0].length +2);
  let result = `${flame}\n+${lines[0]}+\n${flame}`
  console.log(result);
});