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
  let height = Number(lines[0].split(' ')[0]);
  let width = Number(lines[0].split(' ')[1]);
  let difH = Number(lines[2].split(' ')[0]) - Number(lines[1].split(' ')[0]);
  let difWFirst = Number(lines[1].split(' ')[1]) - Number(lines[1].split(' ')[0]);
  let difWSecond = Number(lines[2].split(' ')[1]) - Number(lines[2].split(' ')[0]);
  let firstNum = Number(lines[1].split(' ')[0]);
  let difDif = difWSecond - difWFirst;
  
  for (let i = 1; i <= height; i ++){
      let firstNumLine = firstNum+difH*(i-1);
      let resultLine = "";
      let difW = difWFirst + difDif*(i-1);
      if(difW === 0){
           resultLine = `${firstNumLine} `.repeat(width);  
      }else{
      for (let j = firstNumLine ; j < firstNumLine + width*difW; j += difW){
          resultLine += `${j} `;
      }
      }
      
      console.log(resultLine.trim());
  }
});