const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
void async function () {
    // Write your code here
    let tokens = [];
    while ((line = await readline())) {
        const arr = line.split(',').join('').split('').sort((a, b) => b - a).join('')
        console.log(arr)
    }
}()