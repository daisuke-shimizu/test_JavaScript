// const fs = require('fs');

// fs.open('./text.txt', 'hello', (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log('ファイルが作成されました');
//   }
// }
// )

const fs = require('fs');

//fs.readFileSync(ファイルのパス, 文字コード, コールバック関数)
fs.readFileSync('./text.txt',  (err, data) => {
  //dataがファイルの中身、errは読み込み時のエラー
    if(data) {
      console.log(data);
    } else {
      console.log(err);
    }
  });