const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
void async function () {
    // Write your code here
    let arr = [];
    while ((line = await readline())) {
       arr.push(line) 
    }
    console.log(fun(arr))
    function fun (arr) {
        let s = arr[0].split('')
        let t = arr[1].split('')
        let count = 0
        if (s.lingth > t.length) {
            return false
        }
        for (let i = 0; i < t.length; i++) {
            for (let j = 0; j < s.length; j++) {
                if (s[j] == t[i]) {
                    i++
                    count++
                }   
            }
        }
        return count == s.length
    }
}()

/**
给定两个字符串 s和 t ，判断 s是否为 t 的子序列。
你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度n ~= 500,000），而 s 是个短字符串（长度 <=100）。
字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 
输入描述:
共两行，第一行为字符串s,  第二行为字符串t
字符串t的长度 1<=n<=500000
字符串s的长度 1<=m<=100

输出描述:
输出true或者是false，true表示是s是t的子序列，false表示s不是t的子序列
示例1
输入
abc
ahbgdc

输出
true

示例2
输入
axc
ahbgdc

输出
false
 */