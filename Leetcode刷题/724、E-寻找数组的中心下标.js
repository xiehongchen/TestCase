/**
 * 问题：给你一个整数数组 nums ，请计算数组的 中心下标 。

数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：数组中心下标左右元素相加的和相等，即所有元素的和等于两倍的左侧元素和加上数组中心下标的元素
var pivotIndex = function (nums) {
    // 全部数据求和
    const total = nums.reduce((a, b) => a + b, 0)
    console.log(total);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (2 * sum + nums[i] == total) {
            return i
        }
        sum += nums[i]
    }
    return -1;
};

// 方法二
var pivotIndex2 = function (nums) {
    let sum = 0;
    let ans = 0;
    let index = -1;
    nums.forEach(val => {
        sum += val;
    })
    for (let i = 0; i < nums.length; i++) {
        if (ans == (sum - nums[i]) / 2){
            index = i;
            break;
        }
        ans +=nums[i]
    }
    return index;
};


console.log(pivotIndex([1, 3, 6, 4, 4, 3, 8, , 1, 6, 3]));

console.log(pivotIndex2([1, 3, 6, 4, 4, 3, 8, , 1, 6, 3]));