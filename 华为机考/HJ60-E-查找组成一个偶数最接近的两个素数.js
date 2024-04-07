const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
void async function () {
    // Write your code here
    while(line = await readline()){
        var n = Number(line);
        var c = Infinity;
        var max = 0;
        var min = 0;
        function isSuShu(num) {
            if(num < 2) return false;
            for(var k = 2; k < num; k++) {             
                if(num % k === 0) {
                   return false;
                }
            }
            return true;
        }
        //  循环判断，如果两个数字都是素数则继续
        for(var i = 2; i < n; i++){
            var iTag = isSuShu(i);
            var lTag = isSuShu(n-i);
            if(!iTag || !lTag) {
                continue;
            }
            // 判断两个数字之差小于c
            if( Math.abs(n - i - i) < c) {
                min = i;
                max = n - i;
                c = Math.abs(n - i - i);
            }
        }
        console.log(min);
        console.log(max);
    }
}()