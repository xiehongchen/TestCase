/**
 * 问题：给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
请返回 nums 的动态和。
 * @param {number[]} nums
 * @return {number[]}
 */
// 方法一：前一个加上自己即可
var runningSum = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i];
    }
    return nums;
};

console.log(runningSum([1, 2, 3, 5]));