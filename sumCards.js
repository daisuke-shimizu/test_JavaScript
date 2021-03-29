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
  const Times = Number(lines[0]);
  let cards = lines[1].split(' ');
  if (cards.includes('0')) {
      if (cards.includes('x10')) {
          cards = cards.filter(ele => ele !== 'x10');
      }
      cards = cards.map(ele => Number(ele));
      let maxNumber = Math.max(...cards);
      cards = cards.filter(ele => ele !== maxNumber);
      cards = cards.map(ele => Number(ele));
      let total = cards.reduce(function(sum, element)
      {return sum + element;}, 0);
      console.log(total *10);
  }else {
      cards = cards.map(ele => Number(ele));
      let total = cards.reduce(function(sum, element)
      {return sum + element;}, 0);
      console.log(total);
  }
  
});