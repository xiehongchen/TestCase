const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while ((line = await readline())) {
        const arr = line.split('')
        const result = []
        let i = 0
        while (i < arr.length) {
           if (arr[i] === '-') {
                let s = '-'
                for (let j = i + 1; j < arr.length; j++) {
                    i++
                    if (isNumber(arr[j])) {
                        s += arr[j]
                    } else {
                        break
                    }
                }
                result.push(s)
           } else if (isNumber(arr[i])) {
                result.push(arr[i])
                i++
            } else {
                i++
            }
        }
        console.log(result)
        let add = 0
        for (let i = 0; i < result.length; i++) {
            add += Number(result[i])
        }
        console.log(add)
        function isNumber(n) {
            return n >= 0 && n <= 9
        }
    }
}()

/**
求字符串中所有整数的最小和
题目描述
说明

字符串s，只包含 a-z A-Z + - ；
合法的整数包括
1） 正整数 一个或者多个0-9组成，如 0 2 3 002 102
2）负整数 负号 - 开头，数字部分由一个或者多个0-9组成，如 -0 -012 -23 -00023
输入描述
包含数字的字符串

输出描述
所有整数的最小和

示例一
输入
bb1234aa
输出
10
示例二
输入
bb12-34aa
输出
-31
说明
1+2+(-34) = 31
 */