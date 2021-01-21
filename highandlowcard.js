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
  
  let firstNum = Number(lines[0].split(' ')[0]);
  let secondNum = Number(lines[0].split(' ')[1]);
  const times = Number(lines[1]);
  
  for (let i = 2; i < 2+ times; i ++) {
      let firstCom = Number(lines[i].split(' ')[0]);
      let secondCom = Number(lines[i].split(' ')[1]);
      
      if (firstNum > firstCom) {
          console.log('High');
      }else if (firstNum < firstCom) {
          console.log('Low');
      }else{
          if (secondNum < secondCom) {
              console.log('High');
          }else{
              console.log('Low');
          }
      }
  }
  
});