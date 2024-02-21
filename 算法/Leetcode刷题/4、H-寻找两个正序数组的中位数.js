/**
 * 问题：给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
算法的时间复杂度应该为 O(log (m+n)) 。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 方法一：先合并数组，并按升序排序，判断数组长度是否为2的倍数，是的话，那就选中间两个的和并除以2，不是的话直接去中间元素即可
var findMedianSortedArrays = function (nums1, nums2) {
    let number = [...nums1, ...nums2];
    number.sort((a, b) => a - b)
    let len = number.length;
    if (len % 2 == 0) {
        let l = number[len / 2 -1]
        let r = number[len / 2]
        return (l + r) / 2
    } else {
        let n = number[Math.floor(len / 2)]
        return n
    }
};


console.log(findMedianSortedArrays([1, 2], [3,4]));