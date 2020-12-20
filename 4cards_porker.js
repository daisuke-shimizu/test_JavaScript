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
  let times = Number(lines[0]);

  for(let i = 1; i <= times; i++){
      let cards =lines[i].split('');
    //   console.log(cards);
      let count = {};
      // 連想配列に個数を入力していく
      for(let j = 0; j<= cards.length;j++){
          let elm = cards[j];
          count[elm] = (count[elm] || 0) + 1;
      }
      //連想配列のvalueだけを配列にしてくれる。強力
  let quantity = Object.values(count);
  //配列そのものは、比較演算子で計算できない。
  if(quantity[0]===2 && quantity[1]===2){
              console.log('Two Pair'); 
              continue;
           }
    //配列の中のgetMax関数
  let max = quantity.reduce(function(a, b) {
    return Math.max(a, b);
   });
//   console.log(quantity);
   switch(max) {
       case 4:
           console.log('Four Card');
           break;
       case 3:
           console.log('Three Card');
           break;
       case 2:
           console.log('One Pair');
           break;
       case 1:
           console.log('No Pair');
   }
      
  }
  
});