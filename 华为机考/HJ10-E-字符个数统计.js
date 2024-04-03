const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
void async function () {
    // Write your code here
    while(line = await readline()){
        let arr = line.split('')
        let temp = []
        for (let i = 0; i < arr.length; i++) {
            if (!temp.includes(arr[i])) {
                temp.push(arr[i])
            }
        }
        console.log(temp.length)
    }
}()