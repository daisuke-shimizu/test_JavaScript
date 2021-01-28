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
  let xPosition = Number(lines[0].split(' ')[0]);
  let yPosition = Number(lines[0].split(' ')[1]);
  let inner = Number(lines[0].split(' ')[2]);
  let outer = Number(lines[0].split(' ')[3]);
  let times = Number(lines[1]);
  
  for (let i = 2; i < 2 + times; i ++) {
      let xRequire = Number(lines[i].split(' ')[0]);
      let yRequire = Number(lines[i].split(' ')[1]);
      let xSquare = Math.pow((xRequire - xPosition), 2);
      let ySquare = Math.pow((yRequire - yPosition), 2);
      let square = xSquare + ySquare;
      let distance = Math.sqrt(square);
      if (inner <= distance && distance <= outer) {
          console.log('yes');
      }else{
          console.log('no');
      }
  }
});