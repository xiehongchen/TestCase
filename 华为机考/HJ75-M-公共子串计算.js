const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    var source = [];
    while(line = await readline()){
        source.push(line);
    }
    // let [first, second] = source
    // let max = 0 // 公共子字符串的最大长度
    // for(let i = 0; i < first.length; i++) {
    //     for(let j = i; j <= first.length; j++) {
    //         let tempStr = first.slice(i, j) // slice(i,j)代表从字符串的第i项开始截取后面j项
    //         if(second.includes(tempStr) && tempStr.length > max) { // 除了includes()，还可以使用startWith()
    //             max = tempStr.length
    //         }
    //     }
    // }
    // console.log(max)
    var maxSource = source[0].length >= source[1].length ? source[0] : source[1];
    var minSource = source[0].length >= source[1].length ? source[1] : source[0];
    var left = 0, right = 1, res = '', len = minSource.length;  
    while(left < len && right <= len) {
        var s = minSource.substring(left, right);
        if (maxSource.indexOf(s) === -1) {
            if(right - left === 1) {
                left++;
                right++
            } else {
                left++;
            }
        } else {
            right++;
            res = s.length > res.length ? s : res;
        }
    }
    console.log(res.length);
}()