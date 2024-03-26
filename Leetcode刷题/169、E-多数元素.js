/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-02-22 12:24:45
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-02-22 14:14:57
 * @FilePath: /TestCase/算法/Leetcode刷题/169、E-多数元素.js
 * @Description: 
 * 认真学习每一天
 */
/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // const map = {}
  // const n = nums.length
  // for (let i = 0; i < n; i++) {
  //   if (map[nums[i]]) {
  //     map[nums[i]] += 1
  //   } else {
  //     map[nums[i]] = 1
  //   }
  // }
  // let arr = []
  // for (let o in map) {
  //   console.log(o);
  //   if (map[o] > n / 2) {
  //     arr.push(o)
  //   }
  // }
  // return arr
  let half = nums.length / 2
  let obj = {}
  for(let num of nums){
     obj[num] = (obj[num] || 0) + 1
     if(obj[num] > half) return num
  }
};
// @lc code=end

console.log(majorityElement([2,2,1,1,1,2,2]))

