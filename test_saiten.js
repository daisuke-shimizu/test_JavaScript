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
  let times = Number(lines[0].split(' ')[0]);
  let mark = lines[0].split(' ')[1];
  for(let i = 1; i <= times; i++){
      let score = Number(lines[i].split(' ')[0])- (Number(lines[i].split(' ')[1])*5);
      if(score <0){
          score = 0;
      }if(score>= mark){
      console.log(i);
      }//if分をこの様につなげて書くのはどうなのか
  }
});