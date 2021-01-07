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
  
  // 配列に入れ要素を整数にする
//   let arr = lines[0].split(' ').map(Number);
//   let arr1 = arr.map(x => Math.floor(x/10));
//   let arr2 = arr.map(y => y%10);
  
//   let result1 = arr1.reduce((a,p) => a +=p, 0);
//   let result2 = arr2.reduce((a,p) => a +=p, 0);
//   let result = String(result1%10) + String(result2%10);
  
//   console.log(result);
     let arr = lines[0].split(' ');
    //  console.log(arr);
    // jsでは、配列[-1]で要素が取れないので、元から配列をひっくり返しておく。
     let a = arr[0].split('').reverse().join('');
     let b = arr[1].split('').reverse().join('');
     let aL = a.length;
     let bL = b.length;
     let times = 0;
    //  console.log(times);
     if (aL > bL) {
         times = aL;
     }else{
         times = bL;
     }
     // 
    //  console.log(a);
    //  console.log(b);
     let resultStr = '';
     for (let i = times -1; i >= 0; i --) {
         let x = Number(a[i]);
         let y = Number(b[i]);
         
        if(isNaN(x)){
            x = 0;
        }else if(isNaN(y)){
            y = 0;
        }
        let sum = x + y;
        let mod = String(sum%10);
        resultStr += mod;
     }
    //  console.log(Number(a[2]));
    //  console.log(isNaN(Number(b[2])));
     isNaN(Number(b[2]));
    //  console.log(Number(b[2]));
     console.log(resultStr.split('').join(''));
     
});