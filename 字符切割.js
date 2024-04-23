const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        const str = line + '00000000'
        for (let i = 8; i < str.length; i += 8) {
            console.log(str.slice(i - 8, i))
        }
    }
}()