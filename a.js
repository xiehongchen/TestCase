/**
 * @param {number[]} nums
 * @return {number}
 */
// 输入：nums = [1,1,1,2,2,3]
// 输出：5, nums = [1,1,2,2,3]
// 快慢指针
var removeDuplicates = function(nums) {
  const n = nums.length;
  if (n <= 2) {
      return n;
  }
  let slow = 2, fast = 2;
  while (fast < n) {
      if (nums[slow - 2] != nums[fast]) {
          nums[slow] = nums[fast];
          ++slow;
      }
      ++fast;
  }
  return slow;
};