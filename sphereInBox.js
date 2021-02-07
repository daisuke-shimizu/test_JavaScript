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
  const Quantity = Number(lines[0].split(' ')[0]);
  const Radius = Number(lines[0].split(' ')[1]);
  const Diameter = 2* Radius;
  
  let result = [];
  
  for (let i = 1; i < 1+ Quantity; i ++) {
      let height = Number(lines[i].split(' ')[0]);
      let width = Number(lines[i].split(' ')[1]);
      let depth = Number(lines[i].split(' ')[2]);
      
      if (Diameter <= height && Diameter <= width && Diameter <= depth) {
          result.push(i);
      } 
  }
  console.log(result.join('\n'));
  
  
});