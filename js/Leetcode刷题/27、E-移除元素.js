/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-01-09 12:13:26
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-15 14:43:02
 * @FilePath: /TestCase/算法/leeCode算法/e-移除元素.js
 * @Description: leetcode 面试经典150题 27-简单-移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let len = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
          nums[len] = nums[i]
          len++
      }
  }
  return len
};