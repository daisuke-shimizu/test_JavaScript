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
  
//   for(let i = 0; i <= 4; i++){
//       let 
//   }
  let a = Number(lines[0].split(' ')[0]);
  let b = Number(lines[0].split(' ')[1]);
  let c = Number(lines[0].split(' ')[2]);
  let d = Number(lines[0].split(' ')[3]);
  
  let allArr = [a, b, c, d].permutation();
  
  let sumArr = [];
  //console.log(makeDouble(2,3,4,5));
  for(let i=0; i<24; i++){
      let useArr = allArr[i];
      let fac1 = useArr[0];
      let fac2 = useArr[1];
      let fac3 = useArr[2];
      let fac4 = useArr[3];
      doubledArr =makeDouble(fac1,fac2,fac3,fac4);
      let total = doubledArr.reduce(function(sum, element){
      return sum + element;
      }, 0);
    //   console.log(total);
      sumArr.push(total);
   }
//   console.log(sumArr);
   const aryMax = function (a, b) {return Math.max(a, b);}
   let max = sumArr.reduce(aryMax);
   console.log(max);
});


const makeDouble = (num1, num2, num3, num4)=>{
   return [num1*10+num2, num3*10+num4];
}

(function() {
  let generatePermutation = function(perm, pre, post, n) {
    let elem, i, rest, len;
    if (n > 0)
      for (i = 0, len = post.length; i < len; ++i) {
        rest = post.slice(0);
        elem = rest.splice(i, 1);
        generatePermutation(perm, pre.concat(elem), rest, n - 1);
      }
    else
      perm.push(pre);
  };

  /*
  extend Array.prototype
  e.g. [0, 1, 2].permutation(2)
  => [[0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1]]
  */
  Array.prototype.permutation = function(n) {
    if (n == null) n = this.length;
    let perm = [];
    generatePermutation(perm, [], this, n);
    return perm;
  };
})();