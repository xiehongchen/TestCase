/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-01-15 14:42:51
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-15 14:45:21
 * @FilePath: /TestCase/算法/leeCode算法/e-删除有序数组中的重复项.js
 * @Description: leetcode 面试经典150题 26-简单-删除有序数组中的重复项
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0
  let i = 0
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
          nums[++i] = nums[j]
      }
  }
  return i + 1
};