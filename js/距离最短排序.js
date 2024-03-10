let xm = {
  name: '小明',
  home: 700
}

let schollfellow = [
  {
    name: '小红',
    home: 30
  },
  {
    name: '小白',
    home: 900
  },
  {
    name: '小黑',
    home: 80
  },
  {
    name: '小绿',
    home: 666
  },
  {
    name: '小黄',
    home: 100
  }
]


// 找到离小明家最近的同学，按照距离从小到大排序
let result = schollfellow.sort((a, b) => Math.abs(a.home - xm.home) - Math.abs(b.home - xm.home))
console.log(result)