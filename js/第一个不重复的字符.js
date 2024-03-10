function findOneStr (str) {
  if (!str) return 
  let map = {}
  let arr = str.split('')
  arr.forEach(item => {
    let val = map[item]
    map[item] = val ? val + 1 : 1
  })

  console.log(map)
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]  == 1) {
      return i
    }
  }
  return -1
}
console.log(findOneStr('abcabcde'))
