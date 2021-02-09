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
  //console.log(lines[0]);
  const times = Number(lines[0]);
  //let result = [];
  let meet = 0;
  // 一定数回分、for文で飛ばしたい時はiに足し算するだけ
  for (let i = 1; i < 1+ times; i ++) {
      let sushiNeta = lines[i];
      if (sushiNeta === 'melon') {
        //   if (meet === 1 || i > 10 + Number(result[result.length -1]))
        //   console.log(10 +Number(result[result.length -1]));
          //result.push(i);
          meet += 1;
          i += 10;
      } 
  }
  //&& i > 10 + Number(result[result.length -1])
  //console.log(Number(result[result.length -1]));
  console.log(meet);
});