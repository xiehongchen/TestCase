/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-01-29 10:37:24
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-02-21 16:56:00
 * @FilePath: /TestCase/算法/Leetcode刷题/1、E-两数之和.js
 * @Description: 
 * 认真学习每一天
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 使用map数据结构
    // let map = new Map();
    // for(let i = 0, len = nums.length; i < len; i++){
    //     if(map.has(target - nums[i])){
    //         return [map.get(target - nums[i]), i];
    //     }else{
    //         map.set(nums[i], i);
    //     }
    // }
    // return [];
    for(let i = 0; i < nums.length; i++){
      for(let j = 0; j < i; j++){
          if(nums[i] + nums[j] == target){
              return [j,i]
          }
      }
    }
    return result;
  };
  // @lc code=end
  
  console.log(twoSum([2,7,11,15],9));
  
  