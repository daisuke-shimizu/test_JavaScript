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
  let sentence = "";
  let afterWidth = Number(lines[0].split(' ')[2]);
  for(let i = 1; i<= times; i++){
      sentence += lines[i];
  }
  
  
  let resultArr = [];
  for(let j = 0; j <sentence.length; j += afterWidth){
      resultArr.push(sentence.slice(j, j+ afterWidth));
  }
//   console.log(resultArr);
  
  for (let k = 0; k < resultArr.length; k++){
      console.log(resultArr[k]);
  }
  
});