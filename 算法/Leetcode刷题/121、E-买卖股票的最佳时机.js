/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-02-23 16:05:49
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-02-23 16:05:58
 * @FilePath: /TestCase/算法/Leetcode刷题/121、E-买卖股票的最佳时机.js
 * @Description: 
 * 认真学习每一天
 */
/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let i = 0
  let min = prices[0]
  for (const j of prices) {
    i = Math.max(i, j - min)
    min = Math.min(min, j)
  }
  return i
};
// @lc code=end

