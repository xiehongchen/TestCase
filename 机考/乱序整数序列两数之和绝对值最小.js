const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while ((line = await readline())) {
        const arr = line.split(' ').map(Number)
        let result = []
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                const add = Math.abs(arr[i] + arr[j])
                result.push([arr[i], arr[j], add])
            }
        }
        console.log(result.sort((a, b) => a[2] - b[2])[0].join(' '))
    }
}()


/**
乱序整数序列两数之和绝对值最小
题目描述
给定一个随机的整数数组(可能存在正整数和负整数)nums,
请你在该数组中找出两个数，其和的绝对值(|nums[x]+nums[y]|)为最小值
并返回这两个数(按从小到大返回)以及绝对值。
每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

输入描述
一个通过空格空格分割的有序整数序列字符串，最多1000个整数，
且整数数值范围是[-65535,65535]

输出描述
两个数和两数之和绝对值

示例一
输入
-1 -3 7 5 11 15
输出
-3 5 2
说明
因为|nums[0]+nums[2]|=|-3+5|=2最小，
所以返回-3 5 2
 */