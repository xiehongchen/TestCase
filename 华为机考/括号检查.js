const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while ((line = await readline())) {
        const chars = line.split('');
        let maxDepth = 0;
        const stack = [];
        const map = new Map([
            [')', '('],
            [']', '['],
            ['}', '{']
        ]);
    
        for (const cur of chars) {
            // 如果有左边括号的，直接加到stack数组里，然后判断最大值
            if (cur === '(' || cur === '[' || cur === '{') {
                stack.push(cur);
                maxDepth = Math.max(maxDepth, stack.length);
            }
            // 如果有左边括号的
            if (cur === ')' || cur === ']' || cur === '}') {
                // 当前stack数组为空，那说明这个是无效字符串，输出0
                if (stack.length === 0) {
                    console.log(0);
                    return;
                }
                // 获取最后一位，因为未按正确顺序闭合的字符串
                const left = stack[stack.length - 1];
                const c = map.get(cur);
                if (left === c) {
                    stack.pop();
                } else {
                    console.log(0);
                    return;
                }
            }
        }
    
        if (stack.length === 0) {
            console.log(maxDepth);
        } else {
            console.log(0)
        }
    }
}()

/**
括号检查
题目描述
现有一字符串 仅由'(',')','{','}','[',']'六种括号组成
若字符串满足以下条件之一，则为无效字符串

任意类型的左右括号数量不相等
存在未按正确顺序(先左后右)闭合的括号，
输出括号的最大嵌套深度
若字符串无效则输出0
0 <= 字符串长度 <= 100000
输入描述
一个只包括'(',')','{','}','[',']'的字符串

输出描述
一个整数 ，最大的括号深度

示例一
输入
[]
输出
1
说明
有效字符串最大嵌套深度为1

示例二
输入
([]{()})
输出
3
说明
有效字符串最大嵌套深度为3

示例三
输入
(]
输出
0
说明
无效字符串 有两种括号左右数量不相等

示例四
输入
([)]
输出
0
说明
无效字符串存，在未按正确顺序闭合的字符串

示例五
输入
)(
输出
0
 */