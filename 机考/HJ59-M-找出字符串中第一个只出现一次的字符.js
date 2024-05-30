const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let arr = line.split('')
        let map = {}
        for (let i = 0; i < arr.length; i++) {
            if (map[arr[i]]) map[arr[i]]++
            else map[arr[i]] = 1
        }
        let i = '-1'
        for (const k in map) {
            if (map[k] === 1) {
                i = k
                break
            }
        }
        console.log(i)
    }
})();

/**
描述
找出字符串中第一个只出现一次的字符


数据范围：输入的字符串长度满足 1 ≤ n ≤ 1000

输入描述：
输入一个非空字符串

输出描述：
输出第一个只出现一次的字符，如果不存在输出-1

示例1
输入：
asdfasdfo

输出：
o
 */