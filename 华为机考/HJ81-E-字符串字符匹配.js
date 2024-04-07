const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
void async function () {
    // Write your code here
    let tokens = [];
    while ((line = await readline())) {
        tokens.push(line);
    }
    let first = tokens[0].split("");
    let second = tokens[1];
    let isTrue = first.every((item) => second.includes(item));
    console.log(isTrue);
}()