function initSheet () {
  let sheet = SpreadsheetApp.getActiveSheet();
  //現在アクティブなシートを取得
  sheet.clear();
  //シート上のデータをクリア

  sheet.getRange(1, 1).setValue('daisuke');
  sheet.getRange(1, 2).setValue(82).setBackground('tomato');
  // getRangeでシートの行と列を指定。setValueで値を代入。setBackgroudでcssを指定。
}

// const GETRESULT = (input) => {
//   if (input.map) {
//     return input.map(GETRESULT);
//   } else {
//   return input >= 80 ? 'pass' : 'fail';
//   // 条件演算子（if文のショートカット）
//   }
//   // if (input >= 80) {
//   //   return 'pass';
//   // } else {
//   //   return 'fail';
//   // }
// }