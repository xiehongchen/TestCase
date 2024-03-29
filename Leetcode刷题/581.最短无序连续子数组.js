/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let len = nums.length
  let left = 0, right = len - 1
  // 先找出左右两个错误的
  while (left < len - 1 && nums[left] <= nums[left + 1]) {
    left++
  }
  while (right > 0 && nums[right - 1] <= nums[right]) {
    right--
  }
  console.log('left', left)
  console.log('right', right)

  // 找出错误区间里最大和最小的两个
  let min = Infinity, max = -Infinity
  for (let i = left; i <= right; i++) {
    max = Math.max(max, nums[i])
    min = Math.min(min, nums[i])
  }
  console.log('min', min)
  console.log('max', max)
  while (nums[left] > min) {
    left--
  }
  while (nums[right] < max) {
    right++
  }
  console.log('left', left)
  console.log('right', right)
  return left < right ? right - left - 1: 0

};
// @lc code=end

