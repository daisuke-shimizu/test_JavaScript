// const reoder = (a,b,c) => {
//   for(let i = 0; i <= 3; i++) {
//       let arr = [];
      
//   }
// }

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


let result = [0, 1, 2].permutation();
console.log(result);