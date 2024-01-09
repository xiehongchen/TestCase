/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 1、三指针，从后往前遍历
// const merge = function (nums1, m, nums2, n) {
//     let i = m - 1, j = n - 1, k = m + n -1
//     while( i >= 0 || j >= 0) {
//         if (i < 0) nums1[k--] = nums2[j--]
//         else if (j < 0) nums1[k--] = nums1[i--]
//         else if (nums1[i] < nums2[j]) nums1[k--] = nums2[j--]
//         else nums1[k--] = nums1[i--]
//     }
//     return nums1
// };

// 2、数组方法，时间复杂度为O((m+n)log(m+n)),空间复杂度为O(log(m+n))
// const merge = function (nums1, m, nums2, n) {
//     nums1.splice(m, nums1.length - m, ...nums2);
//     nums1.sort((a, b) => a - b);
// }

// 3、