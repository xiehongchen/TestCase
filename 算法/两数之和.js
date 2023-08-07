/**
 * 两数之和
 */
function twoNumAdd (arr, target) {
  let array = []
  if (Array.isArray(arr)) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
      if (map[target - arr[i]] !== undefined) {
        array.push([target - arr[i], arr[i]])
      } else {
        map[arr[i]] = i
      }
    }
    return array
  }
}
console.log(twoNumAdd([8, 2, 6, 5, 4, 1, 3], 8))
function twoNumAdd1(arr, target) {
  if (Array.isArray(arr)) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      const tmp = target - arr[i];
      
      if (map.has(tmp)) {
        return [tmp, arr[i]];
      }

      map.set(arr[i], tmp);
    }
  }
}

console.log(twoNumAdd1([8, 2, 6, 5, 4, 1, 3], 8));



