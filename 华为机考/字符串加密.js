const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = 'abcdefghijklmnopqrstuvwxyz'
    const arr = []
    while ((line = await readline())) {
        arr.push(line)
    }
    let n = arr[0]
    let list = arr[1].split(' ')
    const result = []
    for (let i = 0; i < n; i++) {
        let n = list[i].split('')
        let s = []
        for (let j = 0; j < n.length; j++) {
            const index = (str.indexOf(n[j]) + add(j)) % 26
            s.push(str[index])
        }
        result.push(s)
    }
    function add (i) {
        if (i === 0) return 1
        if (i === 1 ) return 2
        if (i === 2 ) return 4
        return add(i-1) + add(i-2) + add(i-3)
    }
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].join(''))
    }
}()

/**
字符串加密
题目描述
给你一串未加密的字符串str，
通过对字符串的每一个字母进行改变来实现加密，
加密方式是在每一个字母str[i]偏移特定数组元素a[i]的量，
数组a前三位已经赋值：a[0]=1,a[1]=2,a[2]=4。
当i>=3时，数组元素a[i]=a[i-1]+a[i-2]+a[i-3]，
例如：原文 abcde 加密后 bdgkr，其中偏移量分别是1,2,4,7,13。

输入描述
第一行为一个整数n（1 <= n <= 1000），
表示有n组测试数据，每组数据包含一行，
原文str（只含有小写字母， 0 < 长度 <= 50）。

输出描述
每组测试数据输出一行，表示字符串的密文

示例一
输入
1
xy
输出
ya
 */