process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
// A	4
// E	3
// G	6
// I	1
// O	0
// S	5
// Z	2

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  let str1 =  lines[0];
  const replaced1 = str1.replace(/A/g, '4');
  const replaced2 = replaced1.replace(/E/g, '3');
  const replaced3 = replaced2.replace(/G/g, '6');
  const replaced4 = replaced3.replace(/I/g, '1');
  const replaced5 = replaced4.replace(/O/g, '0');
  const replaced6 = replaced5.replace(/S/g, '5');
  const replaced7 = replaced6.replace(/Z/g, '2');
  console.log(replaced7)
});
