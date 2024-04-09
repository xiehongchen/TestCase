const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const arr = []
    while ((line = await readline())) {
        arr.push(line)
    }
    let n = Number(arr[0])
    const arr1 = arr[1].split(',')
    const arr2 = arr[2].split(',')
    const arr3 = arr[3].split(',')
    let max = Math.max(arr1.length, arr2.length, arr3.length)
    let result = []
    for (let i = 0; i < max; i += n) {
        result = [...result, ...arr1.slice(i, i + n), ...arr2.slice(i, i + n), ...arr3.slice(i, i + n)]
    }
    console.log(result.join(','))
    // 2,5,6,1,7,4,4,5,7,7,9,5,3,4,1,3,8,7
    // 2,5,6,1,7,4,4,5,7,7,9,5,3,4,1,3,8,7
}()

/**
题目描述：
现在有多组整数数组，需要将他们合并成一个新的数组。合并规则，从每个数组里按顺序取出固定长度的内容合并到新的数组中，取完的内容会删除掉，如果该行不足固定长度或者已经为空，则直接取出剩余部分的内容放到新的数组中，继续下一行。如样例1，获得长度3，先遍历第一行，获得2,5,6；再遍历第二行，获得1,7,4；再循环回到第一行，获得7,9,5；再遍历第二行，获得3,4；再回到第一行，获得7，按顺序拼接成最终结果。

输入描述：
第一行是每次读取的固定长度，长度>0；
第2-n行是需要合并的数组，不同的数组用回车换行分隔，数组内部用逗号分隔。

输出描述：
输出一个新的数组，用逗号分隔。

-------------示例-----------------------
输入：
3
2,5,6,7,9,5,7
1,7,4,3,4
4,5,7,1,3,8

输出：
2,5,6,1,7,4,4,5,7,7,9,5,3,4,1,3,8,7
 */