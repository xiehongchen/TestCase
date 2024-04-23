// 十进制转二进制
function toBinary(n) {
  return n.toString(2)
}
// 二进制转十进制
function toDecimal(n) {
  return parseInt(n, 2)
}

console.log(toBinary(100)) // 1100100
console.log(toDecimal(10001001)) // 137