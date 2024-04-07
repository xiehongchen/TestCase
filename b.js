const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
void async function () {
    // Write your code here
    let arr = [];
    while ((line = await readline())) {
       arr.push(line) 
    }
    console.log(arr)
    // let p = arr[1]
    // let n = arr[2]
    // for (let i = 0; i < p.length; i++) {
    //     if (map[p[i]]) map[p[i]] += n[i]
    //     else map[p[i]] = n[i]
    // }
    // let entries = Object.entries(map)
    // entries.sort((a, b) => b - a)
    // let obj = Object.fromEntries(entries)
    // console.log(obj)
}()