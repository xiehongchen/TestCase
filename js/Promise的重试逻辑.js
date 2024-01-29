/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-01-29 18:59:31
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-29 18:59:37
 * @FilePath: /TestCase/js/Promise的重试逻辑.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const retryPromise = (promiseFn, maxAttempts, interval) => {
  return new Promise((resolve, reject) => {
    const attempt = attemptNumber => {
      if (attemptNumber === maxAttempts) {
        reject(new Error('Max attempts reached'));
        return;
      }
      promiseFn().then(resolve).catch(() => {
        setTimeout(() => {
          attempt(attemptNumber + 1);
        }, interval);
      });
    };
    attempt(0);
  });
};

// 模拟一个可能会失败的异步任务函数
const asyncTask = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.2; // 80% 的概率成功
    setTimeout(() => {
      if (success) {
          console.log('成功')
        resolve('Task completed successfully');
      } else {
          console.log('失败')
        reject(new Error('Task failed'));
      }
    }, 1000);
  });
};

// 使用 retryPromise 函数重试异步任务
retryPromise(asyncTask, 3, 1000) // 最多重试 3 次，间隔 1000ms
  .then(result => {
    console.log('最后结果', result); // 如果任务成功，则输出结果
  })
  .catch(error => {
    console.error('Error:', error.message); // 如果任务失败且超过重试次数，则输出错误信息
  });
