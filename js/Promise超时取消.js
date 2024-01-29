const promiseWithTimeout = (promise, ms) =>
  Promise.race([
    promise,
    new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error('Timeout after ' + ms + 'ms')), ms)
    )
  ]);
// 模拟一个异步任务，延迟指定的时间后 resolve
const asyncTask = (delay) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Task completed after ' + delay + 'ms');
      }, delay);
    });
  };
  
  // 使用 promiseWithTimeout 包装异步任务，并设置超时时间为 2000ms
  const wrappedTask = promiseWithTimeout(asyncTask(2000), 2000);
  
  // 执行包装后的异步任务
  wrappedTask
    .then(result => {
      console.log(result); // 如果任务在超时时间内完成，则输出结果
    })
    .catch(error => {
      console.error(error.message); // 如果任务超时，则输出超时错误信息
    });
  