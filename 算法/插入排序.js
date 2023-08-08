/**
 * 插入排序
 * 时间复杂度为O(n^2)
 * @param {*} arr 
 * @returns 
 */
function insertSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = i
    let target = arr[index]
    while (index > 0 && arr[index - 1] > target) {
      arr[index] = arr[index - 1]
      index--
    }
    arr[index] = target
  }
  return arr
}
console.log(insertSort([33,232,46,76,123,57,8,23]))