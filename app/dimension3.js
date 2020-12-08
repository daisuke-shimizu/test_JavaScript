let hiragana3d = [
  [
      ["あ","い","う","え","お"],
      ["か","き","く","け","こ"],
      ["さ","し","す","せ","そ"]
  ],
  [
      ["た","ち","つ","て","と"],
      ["な","に","ぬ","ね","の"],
      ["は","ひ","ふ","へ","ほ"]
  ],
  [
      ["ま","み","む","め","も"],
      ["や","い","ゆ","え","よ"],
      ["ら","り","る","れ","ろ"]
  ]
];



let array1d = [];
for(let array2d of hiragana3d){
  for(let array of array2d){
    for(let result of array){
      array1d.push(result);
    }
  }
};
console.log(array1d);