const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const token = []
    while ((line = await readline())) {
        token.push(line)
    }
    let n = token[0]
    let arr = token[1].split(' ').map(Number)
    if (arr.length === 0 || arr.length === 1 || (arr.length === 2 && arr[0] !== arr[1])) {
        console.log("NO1");
        return
    }
    let min = arr[0];
    let sum = min;
    let temp = min
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
        min = Math.min(min, arr[i]);
        temp ^= arr[i];
    }
    if (temp !== 0) {
        console.log("NO2");
    } else {
        console.log(String(sum - min));
    }
}()

/**
分积木
题目描述
solo和koko是两兄弟
妈妈给了他们一大堆积木
每块积木上都有自己的重量
现在他们想要将这些积木分为两堆
哥哥solo负责分配
弟弟koko要求两个人获得的积木总重量相等
(根据koko的逻辑),个数可以不同,不然就会哭
但koko只会先将两个数转成二进制在进行加法
而且总会忘记进位(每个进位都会忘记)
如当25(11101)+11(1011)时,
koko得到的计算结果是18(10010):11001+01011=10010
solo想要尽可能让自己得到的积木总重量最大,且不让koko哭

输入描述
第一行是一个整数N (2 <= N <= 100)
表示有多少块积木
第二行为空格分开的N个整数Ci (1 <= Ci <= 10^6)
表示第i块积木的重量

输出描述
让koko不哭,输入solo所能获得积木的最大总重量
否则输出 "No"

示例一
输入
3
3 5 6
输出
11
说明
备注:如果能让koko不哭,输出solo所能获得的积木的总重量,否则输出-1
该样例输出为11
解释:
solo能获得重量为5和6的两块积木
5转成二进制为101
6转成二进制为110
按照koko的计算方法(忘记进位)
结果为11(二进制)
koko获得重量为3的积木转成二进制为11
solo和koko得到的积木的重量都是11(二进制)
因此solo可以获得的积木的总重量是 5+6=11(十进制)
 */