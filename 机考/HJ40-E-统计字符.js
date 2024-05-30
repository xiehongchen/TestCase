const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
void async function () {
    // Write your code here
    while(line = await readline()){
        let arr = line.split('')
        let engCharacter = 0
        let empCharacter = 0
        let numCharacter = 0
        let othCharacter = 0
        for (let i = 0; i < arr.length; i++) {
            if ((arr[i] >= 'a' && arr[i] <= 'z') || (arr[i] >= 'A' && arr[i] <= 'Z')) {
                engCharacter++
            } else if (arr[i] >= '0' && arr[i] <= '9') {
                numCharacter++
            } else if (arr[i] === ' ') {
                empCharacter++
            } else {
                othCharacter++
            }
        }
        console.log(engCharacter)
        console.log(empCharacter)
        console.log(numCharacter)
        console.log(othCharacter)
    }
}()