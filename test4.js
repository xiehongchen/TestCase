const a = {
  a1: '111',
  a2: {
    a3: '222'
  }
}
// const b = a
// console.log(b === a)  //  结果为true，因为是浅拷贝，只是复制了引用地址

const b = JSON.parse(JSON.stringify(a))
console.log(b === a)  //  结果为false，因为这个是深拷贝，在堆里面新建了一块区域