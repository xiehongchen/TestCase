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
    const m = arr[0].split(' ').map(Number)
    const len1 = m.slice(0, 1)
    const arr1 = m.slice(1, len1 + 1)
    const n = arr[1].split(' ').map(Number)
    const len2 = n.slice(0, 1)
    const arr2 = n.slice(1, len2 + 1)
    const k = Number(arr[2])
    let add1 = 0
    let add2 = 0
    for (let i = 0; i < k; i++) {
        if (len1 >= i) {
            add1 += arr1[i]
        }
        if (len2 >= i) {
            add2 += arr2[i]
        }
    }
    if (add1 < add2) {
        console.log(add1 + k * arr2[0]) 
    } else {
        console.log(add2 + k * arr1[0])
    }
}()

/**
题目0002-整数对最小和
题目描述
给定两个整数数组 array1 array2
数组元素按升序排列
假设从array1 array2中分别取出一个元素可构成一对元素
现在需要取出K对元素
并对取出的所有元素求和
计算和的最小值
注意：
两对元素如果对应于array1 array2中的两个下标均相同，则视为同一个元素

输入描述
输入两行数组array1 array2
每行首个数字为数组大小 size( 0 < size <= 100)
0 < array1(i) <= 10000 < array2(i) <= 1000
接下来一行为正整数k (0 < k <= array1.size() * array2.size())

输出描述
满足要求的最小和

示例一
输入
3 1 1 2
3 1 2 3
2
输出
4
说明
用例中，需要取两个元素 取第一个数组第0个元素 与第二个数组第0个元素，组成一对元素[1,1]
取第一个数组第1个元素 与第二个数组第0个元素，组成一对元素[1,1]
求和为1+1+1+1=4 为满足要求的最小和
 */