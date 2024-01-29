const conditionalPromise = (conditionFn, promise) =>
  conditionFn() ? promise : Promise.resolve('未开始');

  // 定义一个条件函数，根据当前时间是否为偶数秒来决定是否执行 Promise
const isEvenSecond = () => {
    const seconds = new Date().getSeconds();
    return seconds % 2 === 0;
  };
  
  // 定义一个异步任务函数
  const asyncTask = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Task completed');
      }, 1000);
    });
  };
  
  // 调用 conditionalPromise 函数，根据条件函数决定是否执行异步任务
  conditionalPromise(isEvenSecond, asyncTask())
    .then(result => {
      console.log(result); // 如果条件为偶数秒，则输出异步任务结果
    })
    .catch(error => {
      console.error('Error:', error);
    });
  