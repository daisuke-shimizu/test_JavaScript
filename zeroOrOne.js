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

  const times = Number(lines[0]);
  let resultArray = [[],[],[],[]];
  for (let i = 1; i < 1+ times; i ++) {
     lines[i].split('').forEach( (ele,i) => {
         resultArray[i].push(Number(ele));
     });
  }
//   console.log(resultArray);
  let result = [];
  for (let k = 0; k < 4; k ++) {
     result.push((resultArray[k].filter(l => l === 0).length)%2 === 0 ? 0 : 1);
  }
  console.log(result.join(''));
});