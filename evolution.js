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
  const Atk = Number(lines[0].split(' ')[0]);
  const Def = Number(lines[0].split(' ')[1]);
  const Agi = Number(lines[0].split(' ')[2]);
  const times = Number(lines[1]);
  let result = [];
  
  for (let i = 2; i < 2+ times; i ++) {
      let name = lines[i].split(' ')[0];
      let atkMin = Number(lines[i].split(' ')[1]);
      let atkMax = Number(lines[i].split(' ')[2]);
      
      let defMin = Number(lines[i].split(' ')[3]);
      let defMax = Number(lines[i].split(' ')[4]);
      
      let agiMin = Number(lines[i].split(' ')[5]);
      let agiMax = Number(lines[i].split(' ')[6]);
      
      // 複数条件をこんなに長くかける。
      if (atkMin <= Atk && Atk <= atkMax && defMin <= Def && Def <= defMax && agiMin <= Agi && Agi <= agiMax) {
          result.push(name);
      }
  }
  // '\n'で改行
  console.log(result.join('\n'));
  
});