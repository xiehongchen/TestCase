const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
void async function () {
    // Write your code here
    while(line = await readline()){
        let arr = line.split('').reverse()
        let map = {
            '0': 0,
            '1': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            'A': 10,
            'B': 11,
            'C': 12,
            'D': 13,
            'E': 14,
            'F': 15,
            'a': 10,
            'b': 11,
            'c': 12,
            'd': 13,
            'e': 14,
            'f': 15,
        }
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            count += (map[arr[i]] || 0) * 16 ** i
        }
        console.log(count)
        // 这个利用这个parseInt直接转换
        // console.log(parseInt(line, 16))
    }
}()