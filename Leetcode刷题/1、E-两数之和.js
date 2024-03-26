/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
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
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + nums[j] == target) {
        return [j, i]
      }
    }
  }
  return result;
};
// @lc code=end

console.log(twoSum([2, 7, 11, 15], 9));

