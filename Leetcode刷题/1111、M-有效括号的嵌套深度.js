/*
 * @lc app=leetcode.cn id=1111 lang=javascript
 *
 * [1111] 有效括号的嵌套深度
 */

// @lc code=start
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
  let dep = 0;
  return seq.split("").map((value, index) => {
      if (value === '(') {
          ++dep;
          return dep % 2;
      } else {
          let ans = dep % 2;
          --dep;
          return ans;
      }
  });
};
// @lc code=end

