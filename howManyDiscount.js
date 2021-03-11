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
  const FIRST_PRICE = Number(lines[0].split(' ')[0]);
  const DOWN_RATE = Number(lines[0].split(' ')[1]);
  const discount = (p =FIRST_PRICE, sum =0) => {
      if (p !== 0) {
           sum += p;
           let nextp = Math.floor(p / 100 *(100 - DOWN_RATE));
           discount(nextp, sum);
      }else{
          console.log(sum);
      }
  };
  discount();
  
});