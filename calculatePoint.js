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
  let times = Number(lines[0]);
  let point = 0;
  
  for (let i = 1; i <= times; i ++) {
      let day = Number(lines[i].split(' ')[0]);
      let price = Number(lines[i].split(' ')[1]);
      //console.log(day);
      if (day == 3 || day == 13 || day == 23 || day == 30 || day == 31) {
          point += Math.floor(price * 3 / 100);
      } else if (day == 5 || day == 15 || day == 25 ) {
          point += Math.floor(price * 5 /100);
      }else {
          point += Math.floor(price * 1 /100);
      }
  }
  console.log(point);
});