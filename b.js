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
