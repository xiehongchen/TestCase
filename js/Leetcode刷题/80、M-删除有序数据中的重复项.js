/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-02-21 14:47:48
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-02-21 15:44:48
 * @FilePath: /TestCase/算法/Leetcode刷题/80、M-删除有序数据中的重复项.js
 * @Description: 
 * 认真学习每一天
 */
/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const n = nums.length;
    // 小于等于2时，可直接返回n
    if (n <= 2) {
        return n;
    }
    // 快慢指针
    let slow = 2, fast = 2;
    while (fast < n) {
        // 因为这个是有序数组，当前一个数和后一个数相等，那中间的数等于前后的两个数
        if (nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
        console.log(fast, slow, nums)
    }
    return slow;
};
// @lc code=end
console.log(removeDuplicates([1,1,1,2,2,3]));
/**
 * [1,1,1,2,2,3]
 * 快慢指针梳理过程：
 * 1、nums[slow - 2]为1，nums[fast]为1，值相等，快指针++，fast为3，slow为2
 * 2、nums[slow - 2]为1，nums[fast]为2，值不相等，此时nums[slow] = nums[fast]，nums为[1,1,2,2,2,3]，
 * 慢指针++，slow为3，快指针++，fast为4
 * 3、nums[slow - 2]为1，nums[fast]为2，值不相等，此时nums[slow] = nums[fast]，nums为[1,1,2,2,2,3]，
 * 慢指针++，slow为4，快指针++，fast为5
 * 4、nums[slow - 2]为2，nums[fast]为3，值不相等，此时nums[slow] = nums[fast]，nums为[1,1,2,2,3,3]，
 * 慢指针++，slow为5，快指针++，fast为6
 * 5、此时跳出while循环，返回slow，值为5，nums为[1,1,2,2,3,3]
 */
