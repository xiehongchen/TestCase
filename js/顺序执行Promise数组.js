// 模拟一些异步任务函数
const asyncTask1 = () => {
  return new Promise(resolve => {
      setTimeout(() => {
          console.log('Task 1 completed');
          resolve('Result from Task 1');
      }, 1000);
  });
};

const asyncTask2 = () => {
  return new Promise(resolve => {
      setTimeout(() => {
          console.log('Task 2 completed');
          resolve('Result from Task 2');
      }, 3000);
  });
};

const asyncTask3 = () => {
  return new Promise(resolve => {
      setTimeout(() => {
          console.log('Task 3 completed');
          resolve('Result from Task 3');
      }, 1500);
  });
};

// 一组异步任务数组
const tasks = [asyncTask1, asyncTask2, asyncTask3];

// reduce方法
const sequencePromises = promises =>
  promises.reduce(
      (prev, next) => prev.then(() => next()),
      Promise.resolve()
  );

// 使用 sequencePromises 函数按顺序执行异步任务数组中的任务
// sequencePromises(tasks)
//     .then(() => {
//         console.log('All tasks completed');
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

// 使用for await of
const executeTasks = async () => {
  const results = [];
  for await (const task of tasks) {
      const result = await task();
      results.push(result);
  }
  return results;
};

executeTasks()
  .then(results => {
      console.log('All tasks completed');
      console.log('Results:', results);
  })
  .catch(error => {
      console.error('Error:', error);
  });