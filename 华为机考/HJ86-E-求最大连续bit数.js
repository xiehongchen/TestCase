const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
void async function () {
    // Write your code here
    while(line = await readline()){
        let n = []
        let t = line
        while (t > 0 ) {
            let i = t % 2
            n.push(i)
            t = Math.floor(t / 2)
        }
        let max = 0
        let cur = 0
        for (let i = 0; i < n.length; i++) {
            if (n[i] == 1) {
                cur++
            } else {
                cur = 0
            }
            max = Math.max(max, cur)
        }
        console.log(max)
    }
}()