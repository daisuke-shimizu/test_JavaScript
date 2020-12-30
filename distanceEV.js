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
  
  let times = Number(lines[0]);
  let firstP = 1;
  let distance = 0;
  for (let i = 1; i <= times; i ++){
      let stage = Number(lines[i]);
      distance += Math.abs(stage - firstP);
      firstP = stage;
      
  }
  console.log(distance);
});