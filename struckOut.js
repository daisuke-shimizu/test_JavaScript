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
  const Height = Number(lines[0].split(' ')[0]);
  const Width = Number(lines[0].split(' ')[1]);
  let result = 0;
  let resultArray = [];
  for (let i = 1; i <= Height; i ++) {
      for (let j = 0; j < Width; j ++) {
          let pointHeight = i+Height;
          let lineOX = lines[i].split('')[j];
          let linePoint = lines[i + Height].split(' ')[j];
        resultArray.push(lineOX + linePoint);
      }
  }
  let resultNumbers = resultArray.filter(n => n.includes('o')).map(n => n.slice(1));
  if (resultNumbers.length === 0) {
     console.log(0);
  } else {
  let sum = resultNumbers.reduce(
      (a,b) => Number(a) + Number(b)
      );
console.log(sum);
}
});