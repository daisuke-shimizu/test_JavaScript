let hiragana2d = [
  ["あ","い","う","え","お"],
  ["か","き","く","け","こ"],
  ["さ","し","す","せ","そ"],
  ["た","ち","つ","て","と"]
];

console.log(hiragana2d[1][2]);


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

console.log(hiragana3d[0][0][1]);



let array1d = [];
for(let array of hiragana3d){
   for(let result1 of array){
       for(let result2 of result1){
           array1d.push(result2)
       }
  }
};
console.log(array1d);