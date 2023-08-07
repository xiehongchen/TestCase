function threeSum(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // 避免重复计算相同的数
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

const nums = [5, 2, 1, 1, 3, 4, 6];
const target = 8;
const output = threeSum(nums, target);
console.log(output); // 输出 [[1, 1, 6], [1, 2, 5], [1, 3, 4]]
