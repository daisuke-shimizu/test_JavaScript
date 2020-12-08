let hiragana2d = [
  ["あ","い","う","え","お"],
  ["か","き","く","け","こ"],
  ["さ","し","す","せ","そ"],
  ["た","ち","つ","て","と"]
];

let array1d =[];
for(let array of hiragana2d){
  for(let result of array){
      array1d.push(result)
 }
};
console.log(array1d)//結果：["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ"]；