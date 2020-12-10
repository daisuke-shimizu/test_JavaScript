process.stdin.resume();
process.stdin.setEncoding('utf8');
/**
  C024:ミニ・コンピュータ
*/

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
//   console.log(lines[1].split(' ')[0])
// num1 num2を宣言している、同じスコープに関数を宣言する必要がある。
  let num1 = 0;
  let num2 = 0;
  function set_f(num, initial_val){
    switch(num){
        case 1:
            num1 = initial_val;
            return num1;
            break;
        case 2:
            num2 = initial_val;
            return num2;
            break;
    }
    }
    
    function add_f(add_num){
        num2 = num1 + add_num;
        return num2;
    }
    
    function sub_f(sub_num){
        num2 = (num1 - sub_num);
        return num2;
    }
  for(let i = 1; i < Number(lines[0])+1; i+=1){
      let kind_f = lines[i].split(' ')[0];
      switch(kind_f){
          case "SET":
              set_f(Number(lines[i].split(' ')[1]), Number(lines[i].split(' ')[2]));
              break;
          case "ADD":
              add_f(Number(lines[i].split(' ')[1]));
              break;
          case "SUB":
              sub_f(Number(lines[i].split(' ')[1]));//ここの部分、sub_fと書き忘れたw
              break;
      }
  }
  console.log(`${num1} ${num2}`);
});