const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
  // Write your code here
  while ((line = await readline())) {
    const arr = line.split(' ')
    let result = []
    let falg = false
    let temp = []
    const caseList = {
      '1': case1,
      '2': case2,
      '3': case3,
      '4': case4,
      '5': case5
    }
    for (let i = 0; i < arr.length; i++) {
      caseList[arr[i]]()
      console.log('result', arr[i], result, result.length)
    }
    function case1() {
      // 如果有字母被选择，清空所选字母再输出
      if (falg) {
        result = []
        result.push('a')
      } else {
        result.push('a')
      }
      falg = false
    }
    function case2() {
      // 屏幕上有字母时、且有字母被选择，进行操作复制操作
      if (falg && result.length != 0) {
        temp = [...result]
      }
    }
    function case3() {
      // 有字母被选择时，复制到剪贴板，并清空所选字母
      if (falg) {
        temp = [...result]
        result = []
      }
    }
    function case4() {
      // 有字母被选择时，先清空所选字母再输出
      if (falg) {
        result = []
        result = [...temp]
      } else {
        result = [...result, ...temp]
      }
      falg = false
    }
    function case5() {
      // 选择字母
      falg = true
    }
  }
}()


/**
题目描述
有一个特殊的五键键盘
上面有A、Ctrl-C、Ctrl-X、Ctrl-V、Ctrl-A
A键在屏幕上输出一个字母A
Ctrl-C将当前所选的字母复制到剪贴板
Ctrl-X将当前选择的字母复制到剪贴板并清空所选择的字母
Ctrl-V将当前剪贴板的字母输出到屏幕
Ctrl-A选择当前屏幕中所有字母
注意：

剪贴板初始为空
新的内容复制到剪贴板会覆盖原有内容
当屏幕中没有字母时,Ctrl-A无效
当没有选择字母时Ctrl-C、Ctrl-X无效
当有字母被选择时A和Ctrl-V这两个输出功能的键,
会先清空所选的字母再进行输出
给定一系列键盘输入,输出最终屏幕上字母的数量

输入描述
输入为一行
为简化解析用数字12345分别代替A、Ctrl-C、Ctrl-X、Ctrl-V、Ctrl-A的输入
数字用空格分割

输出描述
输出一个数字为屏幕上字母的总数量

示例一
输入
1 1 1
输出
3

示例二
输入
1 1 5 1 5 2 4 4
输出
2
 */