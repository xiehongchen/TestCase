/**
 * 冒泡排序
 * 循环判断，如果左边大于右边，就替换位置
 * 时间复杂度为O(n^2)
 * @param {*} arr 
 * @returns 
 */
function bubbleSort (arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 直接替换，使用结构赋值和数组的特效
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        // 中间数据
        // const temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
      }
    }
  }
  return arr
}
console.log(bubbleSort([1,7,3,99,32,75,12]))