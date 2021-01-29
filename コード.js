

const GETRESULT = (input) => {
  if (input.map) {
    return input.map(GETRESULT);
  } else {
  return input >= 80 ? 'pass' : 'fail';
  // 条件演算子（if文のショートカット）
  }
  // if (input >= 80) {
  //   return 'pass';
  // } else {
  //   return 'fail';
  // }
}