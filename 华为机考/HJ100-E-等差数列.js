const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 输入：275
// 输出：113575
// 说明：2+5+...+821+824=113575  
void async function () {
    // Write your code here
    while(line = await readline()){
        let n = 2
        for (let i = 1; i < line; i++) {
            n = 3 * i + 2 + n
        }
        console.log(n)
    }
}()