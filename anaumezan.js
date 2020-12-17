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
  
  caluculationArr = lines[0].split(" ");
  
  let fac0 = caluculationArr[0];
  let fac1 = caluculationArr[1];
  let fac2 = caluculationArr[2];
  let fac3 = caluculationArr[3];
  let fac4 = caluculationArr[4];
  
  if(fac4 === 'x') {
      switch(fac1){
          case '+':
             console.log(Add(fac0,fac2));
             break;
          case '-':
              console.log(Sub(fac0,fac2));
              break;
      }
  }else if(fac0 === 'x'){
      switch(fac1){
          case '+':
             console.log(Sub(fac4,fac2));
             break;
          case '-':
              console.log(Add(fac2,fac4));
              break;
      }
  }else if(fac2 === 'x'){
     switch(fac1){
          case '+':
             console.log(Sub(fac4,fac0));
             break;
          case '-':
              console.log(Sub(fac0,fac4));
              break;
      } 
  }
  

});

const Add = (a,b)=>{
    return Number(a)+Number(b);
}
const Sub = (a,b)=>{
    return Number(a)-Number(b);
}