/*
 * @lc app=leetcode.cn id=2047 lang=javascript
 *
 * [2047] 句子中的有效单词数
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
  const arr = sentence.split(' ')
  let n = 0
  let a = 0
  for (let i = 0; i < arr.length; i++) {
    a = 0
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '-') {
        if (j == 0 || j == arr[i].length - 1 || !judge(arr[i][j+1]) || a == 1 || arr[i].length == 2) {
          break
        } else {
          a = 1
        }
      } else if (arr[i][j] === '!' || arr[i][j] === ',' || arr[i][j] === '.') {
        if (j !== arr[i].length - 1) {
          break
        }
      } else if (arr[i][j] >= 0 && arr[i][j] <= 9) {
        break
      }
      if (j === arr[i].length - 1) {
        // console.log(i, ':', arr[i], '     n: ', n)
        n++
      }
    }
  }
  function judge(str) {
    return str.charAt() >= 'a' && str.charAt() <= 'z'
  }
  return n
};
// @lc code=end

