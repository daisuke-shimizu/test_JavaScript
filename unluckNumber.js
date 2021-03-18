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
  const unluckNumber = lines[0];
  const times = Number(lines[1]);
  let roomNumbers = [];
  for(let i =2; i < times +2; i ++) {
      roomNumbers.push(lines[i].split(''));
  }
  let result = [];
  roomNumbers.forEach((ele, i) => {
      if(!(ele.includes(unluckNumber))){
          result.push(i);
      }
  });
  if (result.length === 0) {
      console.log('none');
  }else {
  result.forEach(ele =>{
      console.log(roomNumbers[ele].join(''));
  });
  }
});