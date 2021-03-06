process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const arr = lines[0].split('');
  let arrNum = arr.filter(e => e != '-');
  let arrLength = arrNum.map(function(e) {
      if (e === '0') {
         return (Number(e) +12)*2;
      }else {
         return (Number(e) +2)*2;
      }
  });
  const total = arrLength.reduce(
      (sum, e) => {
          return sum += e;
      }, 0
      );
  console.log(total);
});