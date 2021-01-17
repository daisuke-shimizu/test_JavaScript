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
  //.log(lines[0]);
  let equation = lines[0].split('+');
  //console.log(equation);
  let result = 0;
  
//   console.log(equation[0].match(/>/g));
  let double =equation.map(function(factor){
      let double = 0;
      if (factor.match(/</g) === null){}
      else{
          double = Number(factor.match(/</g).length);
      }
      return double *10;
  });
  //console.log(double);
  
  let single = equation.map(function(factor){
      //let double = Number(factor.match(/\</g).length);
      let single = Number(factor.match(/\//g).length);
      return   single;
  });
  //console.log(single);
  for (let i = 0; i < single.length; i ++){
      result += double[i] + single[i];
  }
  console.log(result);
  
});