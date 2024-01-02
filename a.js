/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} 不要返回任何内容，而是就地修改nums1。
 */
var merge = function (nums1, m, nums2, n) {
  const list = nums1.filter(i => i !== 0)
  const nums1 = [...list, ...nums2]
};