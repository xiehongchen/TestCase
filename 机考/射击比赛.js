const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
// 13
// 3,3,7,4,4,4,4,7,7,3,5,5,5
// 53,80,68,24,39,76,66,16,100,55,53,80,55
void async function () {
    // Write your code here
    let arr = [];
    while ((line = await readline())) {
       arr.push(line) 
    }
    let p = arr[1].split(',')
    let n = arr[2].split(',')
    let map = {}
    // 获取所有的数据
    for (let i = 0; i < p.length; i++) {
        if (map[p[i]]) map[p[i]] += ',' + n[i]
        else map[p[i]] = n[i]
    }
    for (const k in map) {
        if (!map[k]) delete map[k]
        let list = map[k].split(',')
        if (list.length < 3) {
            delete map[k]
        } else {
            list = list.sort((a, b) => b - a)
            map[k] = Number(list[0]) + Number(list[1]) + Number(list[2])
        }
    }
    // { '3': 123, '4': 123 }
    // 将对象转换成数组套数组 [['3', 123], ['4', 123]]这样的格式
    let entries = Object.entries(map)
    entries.sort((a, b) => {
        if (a[1] == b[1]) {
            return b[0] - a[0]
        } else {
            return b[1] - a[1]
        }
    })
    let t = ''
    entries.forEach(item => {
        t += item[0] + ' '
    })
    console.log(t)
}()


/** 
题目描述
给定一个射击比赛成绩单
包含多个选手若干次射击的成绩分数
请对每个选手按其最高三个分数之和进行降序排名
输出降序排名后的选手ID序列

条件如下:
一个选手可以有多个射击成绩的分数 且次序不固定
如果一个选手成绩小于三个 则认为选手的所有成绩无效 排名忽略该选手
如果选手的成绩之和相等,则成绩相等的选手按照其ID降序排列

输入描述
输入第一行:一个整数 N
表示该场比赛总共进行了N次射击
产生N个成绩分数 2 <= N <= 100
输入第二行 一个长度为N的整数序列
表示参与本次射击的选手Id
0 <= ID <= 99
输入第三行是长度为N的整数序列
表示参与每次射击的选手对应的成绩
0 <= 成绩 <= 100

输出描述
符合题设条件的降序排名后的选手ID序列

示例一
输入
13
3,3,7,4,4,4,4,7,7,3,5,5,5
53,80,68,24,39,76,66,16,100,55,53,80,55
输出
5,3,7,4
说明
该场射击比赛进行了13次,参赛选手为3 4 5 7
3号选手的成绩为53 80 55最高三个成绩的和为 188
4号选手的成绩为24 39 76 66最高三个和为181
5号选手的成绩为53 80 55 最高三个和为188
7号选手成绩为68 16 100 最高三个和184
比较各个选手最高三个成绩的和
3 = 5 > 7 > 4
由于3和5成绩相等 且5 > 3 所以输出为5,3,7,4
*/