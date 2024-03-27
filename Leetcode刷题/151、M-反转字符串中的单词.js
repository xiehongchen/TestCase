/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // return s.split(' ').filter(item => item !== '').reverse().join(' ')
  let arr = []
  let str = ''
  let j = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      str += s[i]
    } else {
      if (str !== '') {
        arr[j++] = str
        str = ''
      }
    }
  }
  if (str !== '') {
    arr[j++] = str
  }
  str = arr[arr.length - 1]
  for (let k = arr.length - 2; k >= 0; k--) {
    str = str + ' ' + arr[k]
  }
  return str
};
// @lc code=end

