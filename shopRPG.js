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
class Item {
    constructor(itemPrice, itemNumber) {
      this.number = itemNumber;
      this.price = itemPrice;
    }
}

  
reader.on('close', () => {
    
  let itemPriceList = lines[1].split(' ').map(n => Number(n));
  const itemList = itemPriceList.map((item, i) => {
     return new Item(item, i+1);
  });
  
  let money = Number(lines[2].split(' ')[0]);
  const times = Number(lines[2].split(' ')[1]);
  
  for (let i = 3; i < times+3; i ++) {
      let itemKind = Number(lines[i].split(' ')[0]);
      let item = itemList.filter(i => i.number === itemKind)[0];
      let subTotalPrice = Number(lines[i].split(' ')[1]) *item.price;
      if (money < subTotalPrice) {
      }else {
         money = money - subTotalPrice;   
      }
  }
  console.log(money);
});