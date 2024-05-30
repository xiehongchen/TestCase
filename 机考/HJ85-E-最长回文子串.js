const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let maxLen = 1
        let tempStr = ''
        for(let i = 0; i < line.length; i++){
            for(let j = i+1; j < line.length; j++){
                tempStr = line.slice(i, j+1)
                if(tempStr === tempStr.split('').reverse().join('') && tempStr.length > maxLen) {
                    maxLen = tempStr.length
                }
            }
        }
        console.log(maxLen)
    }
}()