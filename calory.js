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
  let numFoods = Number(lines[0].split(' ')[0]);
  let numPerson = Number(lines[0].split(' ')[1]);

  let calArr = [];
  for (let i = 1;   i <= numFoods;i++){
      calArr.push(Number(lines[i])/100);
  }
  //console.log(calArr);
  
  for (let j = numFoods+1; j <= numFoods+numPerson; j++){
      let result = 0;
      for (let k = 0; k < numFoods; k ++){
          //console.log(Number(lines[j].split(' ')[k]) * Number(calArr[k]));
          result += Number(lines[j].split(' ')[k]) * Number(calArr[k]);
      }
      console.log(Math.floor(result));
  }
});