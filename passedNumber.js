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
  let resultArr = [];
  for (let i = 1; i <= times; i ++){
      let major = lines[i].split(' ')[0];
      let english = Number(lines[i].split(' ')[1]);
      let math = Number(lines[i].split(' ')[2]);
      let science = Number(lines[i].split(' ')[3]);
      let japanese = Number(lines[i].split(' ')[4]);
      let history = Number(lines[i].split(' ')[5]);
      let sum = english + math + science + japanese + history;
      let sSum = math + science;
      let lSum = japanese + history;
      if (sum >= 350 && major === 's' && sSum >= 160){
          resultArr.push(`${i} is passed`);
      }else if(sum >= 350 && major === 'l' && lSum >= 160){
          resultArr.push(`${i} is passed`);
      }
  }
  console.log(resultArr.length);
  
});