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
  let times = Number(lines[0]);
//   console.log(times +2);
  let test_str = lines[1];
  let arr1 = [];
  for(let i = 2; i< times +2; i+=1){
      if(lines[i].includes(`${lines[1]}`)){
          console.log(`${lines[i]}`);
          arr1.push(lines[i]);
          //pushメソッドは、破壊的メソッド
      }
  }
  if(arr1.length === 0){
      console.log('None');
  }
  
});