// 方法一:
var twoSum = function(nums, target) {
    let map = new Map();
    console.log(map);
    for(let i = 0, len = nums.length; i < len; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i];
        }else{
            map.set(nums[i], i);
        }
    }
    return [];
};

// 方法二:
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] + nums[j] == target){
                return [j,i]
            }
        }
    }
    return result;
};

console.log(twoSum([2,7,11,15],9));