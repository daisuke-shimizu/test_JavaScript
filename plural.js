process.stdin.resume();
process.stdin.setEncoding('utf8');
// 末尾が s, sh, ch, o, x のいずれかである英単語の末尾に es を付ける
// ・末尾が f, fe のいずれかである英単語の末尾の f, fe を除き、末尾に ves を付ける
// ・末尾の1文字が y で、末尾から2文字目が a, i, u, e, o のいずれでもない英単語の末尾の y を除き、末尾に ies を付ける
// ・上のいずれの条件にも当てはまらない英単語の末尾には s を付ける
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  let times = Number(lines[0]);
  let lastX = /x$/;
  let lastO = /o$/;
  let lastCh = /ch$/;
  let lastSh = /sh$/;
  let lastS = /s$/;
  let lastFe = /fe$/;
  let lastF = /f$/;
  let lastY = /[^aiueo]y$/;
  
  
  for (let i = 1; i <= times; i ++) {
      let word = lines[i];
      if (lastX.test(word)){
          word = word.slice( 0, -1 )+ 'xes';
      }else if(lastO.test(word)){
          word = word.slice( 0, -1 )+ 'oes';
      }else if(lastCh.test(word)){
          word = word.slice( 0, -2 )+ 'ches';
      }else if(lastSh.test(word)){
          word = word.slice( 0, -2 )+ 'shes';
      }else if(lastS.test(word)){
          word = word.slice( 0, -1 )+ 'ses';
      }else if(lastFe.test(word)){
          word = word.slice( 0, -2 )+ 'ves';
      }else if(lastF.test(word)){
          word = word.slice( 0, -1 )+ 'ves';
      }else if(lastY.test(word)){
          word = word.slice( 0, -1 )+ 'ies';
      }
      else{
          word += 's'
      }
      console.log(word);
  }
});