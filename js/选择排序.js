/**
 * 选择排序
 * 依次找到剩余元素的最小值或者最大值，放置在末尾或者开头。
 * 平均时间复杂度为O(n^2)，空间复杂度为O(1)
 * 最快O(n^2)，最慢O(n^2)，不稳定，占用常用内存
 * @param {*} arr 
 * @returns 
 */
function selectSort (arr) {
  let index
  for (let i = 0; i < arr.length - 1; i++) {
    index = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j
      }
    }
    if (index !== i) {
      [arr[i], arr[index]] = [arr[index], arr[i]]
    }
    console.log(`第${i+1}次循环`, arr);
  }
  return arr
}

console.log(selectSort([3,23,77,3,99,11,4,66]))