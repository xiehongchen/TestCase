const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// A = B + 2C
// 4
// 2 7 3 0
void async function () {
    // Write your code here
    const arr = []
    while ((line = await readline())) {
        arr.push(line)
    }
    const n = Number(arr[0])
    const list = arr[1].split(' ').map(item => Number(item))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) continue
            const add = list[i] + list[j] * 2
            console.log('add', add, list[i], list[j])
            if (list.includes(add) && add !== list[i]) {
                console.log('输出结果', list[i], list[j], add)
            }
        }
    }
}()
