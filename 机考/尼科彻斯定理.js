const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 36 31
void async function () {
    // Write your code here
    while(line = await readline()){
      const n = line * line
      const m = Math.floor(line / 2)
      // 偶数个
      let result = ''
      if (line % 2 === 0) {
        const first = n + 1 - m * 2
        result = first
        for (let i = 1; i < line; i++) {
          result = result + '+' + (first + i * 2)
        }
        console.log('result', result)
      } else  {
        const first = n - m * 2
        result = first
        for (let i = 1; i < line; i++) {
          result = result + '+' + (first + i * 2)
        }
        console.log('result', result)
      }
    }
}()