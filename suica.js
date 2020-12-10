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
  let arr1 = lines[0].split(' ');
  let first_depo = Number(arr1[0]);
  let times = Number(arr1[1]);
  let point = 0;
  let balance = first_depo
  for(let i = 1; i< times+1; i +=1){
      if (point > lines[i]){
          point -= lines[i];
          console.log(`${balance} ${point}`);
      } else{
      let add_point = Number(lines[i])/10;
      point += add_point;
      balance -= lines[i];
      console.log(`${balance} ${point}`);
      }
  }
  
});