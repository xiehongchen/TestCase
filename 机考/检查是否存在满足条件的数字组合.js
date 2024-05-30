const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// A = B + 2C
// 4
// 2 7 3 0
void async function () {
    // Write your code here
    const arr = []
    while ((line = await readline())) {
        arr.push(line)
    }
    const n = Number(arr[0])
    const list = arr[1].split(' ').map(item => Number(item))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) continue
            const add = list[i] + list[j] * 2
            console.log('add', add, list[i], list[j])
            if (list.includes(add) && add !== list[i]) {
                console.log('输出结果', list[i], list[j], add)
            }
        }
    }
}()

/**
给定一个正整数数组检查数组中是否存在满足规则的数组组合

规则： A=B+2C

输入描述

第一行输出数组的元素个数 接下来一行输出所有数组元素，用空格隔开 输出描述 如果存在满足要求的数 在同一行里依次输出 规则里 A/B/C的取值 用空格隔开 如果不存在输出0

示例1： 输入 4 2 7 3 0 输出 7 3 2 说明： 7=3+2*2

备注：

数组长度在3~100之间

数组成员为0~65535

数组成员可以重复

但每个成员只能在结果算式中使用一次，如数组成员为 [0,0,1,5]

0出现两次允许，但结果0=0+2*0不允许 因为算式中使用了3个0

用例保证每组数字里最多只有一组符合要求的解
 */