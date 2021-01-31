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
  const winningNum = lines[0].split(' ');
  const times = Number(lines[1]);
  //console.log(winningNum);
  const findWin = (number) => {
     return winningNum.includes(number);
  }
  
  for (let i = 2; i < 2+times; i ++) {
      let count = 0;
      let lottery = lines[i].split(' ');
      
      for (let j = 0; j < 6; j ++) {
          if (findWin(lottery[j])) {
              count += 1;
          }
      }
      console.log(count);
  }
});