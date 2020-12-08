//入力例
//　lines[0]=  3 44
// lines[1]=4
// lines[2]=2
// lines[3]=6


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
//   console.log(lines[0]);
  arr1 = lines[0].split(' ');
//   console.log(arr1);
  let bin_converted_str = parseInt(arr1[1]).toString(2);
//   console.log(bin_converted_str);
  function result(param1){
      return bin_converted_str.charAt(bin_converted_str.length - param1);
  }
  for(let i= 1; i < parseInt(arr1[0])+1; i +=1){
      console.log(result(lines[i]));
  }
  
});