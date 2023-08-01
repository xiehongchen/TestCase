const A = [1, 2, 3];
const B = [4, 5, 6];
const C = [7, 8, 9];

function test(num) {
  if (A.includes(num)) {
      return A;
  } else if (B.includes(num)) {
      return B;
  } else if (C.includes(num)) {
      return C;
  } else {
      return null;
  }
}

const numToFind = 5;
const result = test(numToFind);
console.log(result); // 输出：B


var b = 10;
(function b(){
    b = 20;
    console.log(b);
})();