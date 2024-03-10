/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-02-22 14:49:48
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-02-22 14:50:03
 * @FilePath: /TestCase/算法/Leetcode刷题/189、M-轮转数组.js
 * @Description: 
 * 认真学习每一天
 */
/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // 数组方法。能算数？？？
  // nums.splice(0,0, ...nums.splice(-(k % nums.length)))
  
  // 数组翻转
  const n = nums.length
  k %= n
  reverse(nums, 0, n - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, n - 1)
};

function reverse(nums, start, end) {
  while(start < end) {
    const temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}
// @lc code=end

console.log(rotate([1,2,3,4,5,6,7], 3));