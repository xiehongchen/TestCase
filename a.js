/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2023-11-16 16:14:23
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-30 10:56:54
 * @FilePath: /TestCase/a.js
 * @Description: 
 * 认真学习每一天
 */

const onceResolvedPromise = (executor) => {
  let isResolved = false;
  let resolvedValue;

  return new Promise((resolve, reject) => {
    executor(
      value => {
        if (!isResolved) {
          isResolved = true;
          resolvedValue = value;
          resolve(value);
        }
      },
      reject
    )
  });
};

console.log('123')
