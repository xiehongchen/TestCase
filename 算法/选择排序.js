/**
 * 选择排序
 * 时间复杂度为O(n^2)
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
  }
  return arr
}

console.log(selectSort([3,23,77,3,99,11,4,66]))