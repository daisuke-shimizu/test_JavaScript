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
  let xSquare;
  let ySquare;
  let noisyLengthSquare = Number(lines[0].split(' ')[2]) **2;
  let xPoint = Number(lines[0].split(' ')[0]);
  let yPoint = Number(lines[0].split(' ')[1]);
  const times = Number(lines[1]);
  for (let i = 2; i < times+2; i ++) {
      xSquare = (Math.abs(Number(lines[i].split(' ')[0]) - xPoint))**2;
      ySquare = (Math.abs(Number(lines[i].split(' ')[1]) - yPoint))**2;
      if (noisyLengthSquare <= xSquare + ySquare) {
          console.log('silent');
      } else {
          console.log('noisy');
      }
  }
});