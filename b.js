const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const token = []
    while ((line = await readline())) {
        token.push(line)
    }
    let n = token[0]
    let arr = token[1].split(' ').map(Number)
    if (arr.length === 0 || arr.length === 1 || (arr.length === 2 && arr[0] !== arr[1])) {
        console.log("NO1");
        return
    }
    let min = arr[0];
    let sum = min;
    let temp = min
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
        min = Math.min(min, arr[i]);
        temp ^= arr[i];
    }
    if (temp !== 0) {
        console.log("NO2");
    } else {
        console.log(String(sum - min));
    }
}()
