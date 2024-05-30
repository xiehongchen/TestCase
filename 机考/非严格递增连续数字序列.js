const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while ((line = await readline())) {
        const arr = line.split('')
        let max = 0
        let len = 0
        let i = 0
        while (i < arr.length) {
            if (isNumber(arr[i])) {
                len++
                for (let j = i + 1; i < arr.length; j++) {
                    if (isNumber(arr[j]) && arr[j] >= arr[j - 1]) {
                        i++
                        len++
                        max = Math.max(max, len)
                    } else {
                        i++
                        len = 0
                        break
                    }
                }
            } else {
                i++
            }
            console.log(i, max)
        }
        function isNumber(n) {
            return n >= 0 && n <= 9
        }
    }
}()

/**
非严格递增连续数字序列
题目描述
输入一个字符串仅包含大小写字母和数字
求字符串中包含的最长的非严格递增连续数字序列长度
比如：
12234属于非严格递增数字序列

输入描述
输入一个字符串仅包含大小写字母和数字

输出描述
输出字符串中包含的最长的非严格递增连续数字序列长度

示例一
输入
abc2234019A334bc
输出
4
说明
2234为最长的非严格递增连续数字序列，所以长度为4
 */