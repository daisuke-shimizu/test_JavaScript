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
  const NumberChildren = Number(lines[0]);
  let lessLists = [];
  let greaterLists = [];
  
  for (let i = 1; i <= NumberChildren; i ++) {
      if (lines[i].split(' ')[0] === 'le') {
          lessLists.push(parseFloat(lines[i].split(' ')[1]));
      } else {
          if (lines[i].split(' ')[0] === 'ge') {
            greaterLists.push(parseFloat(lines[i].split(' ')[1]));
          }
    　}}
  console.log(`${Math.max(...greaterLists).toFixed(1)} ${Math.min(...lessLists).toFixed(1)}`);
});