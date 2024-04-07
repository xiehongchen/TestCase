const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
void async function () {
    // Write your code here
    let tokens = []
    while(line = await readline()){
        tokens.push(line.split(' '))
    }
    let num = tokens[1].sort((a, b) => a - b).join(" ")
    console.log(tokens[1].slice(0, tokens[0][1]).join(" "))
}()