const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
      const arr = line.split('')
      console.log(arr.reverse().join(''))
    }
}()
function executePromisesSequentially(promiseFuncs) {
  let resultPromise = Promise.resolve(); // 初始一个resolved状态的Promise作为起点

  // 遍历传入的promise数组
  for (const promiseFunc of promiseFuncs) {
    resultPromise = resultPromise.then(promiseFunc); // 将当前函数添加到链式调用中
  }

  return resultPromise; // 返回最终的Promise，支持链式调用
}

// 示例用法
const promises = [
  () => new Promise(resolve => setTimeout(() => resolve('First'), 1000)),
  () => new Promise(resolve => setTimeout(() => resolve('Second'), 500)),
  () => new Promise(resolve => setTimeout(() => resolve('Third'), 200))
];

executePromisesSequentially(promises)
  .then(results => {
    console.log('Final result:', results); // 输出最终结果
    return 'Chain completed'; // 返回值将传递给下一个.then()中
  })
  .then(finalMessage => {
    console.log(finalMessage); // 输出链式调用完成信息
  })
  .catch(error => {
    console.error('Error:', error); // 捕获链中任何地方出现的错误
  });
