/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-01-30 10:23:35
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-30 10:43:44
 * @FilePath: /TestCase/js/Promise只执行1次.js
 * @Description: 这个好像不太行
 */
const onceResolvedPromise = executor => {
  let isResolved = false;
  return new Promise((resolve, reject) => {
    executor(
      value => {
        if (!isResolved) {
          isResolved = true;
          resolve(value);
        }
      },
      reject
    );
  });
};

const executor = (resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved value');
  }, 1000);
};

const promise = onceResolvedPromise(executor);

promise.then(value => {
  console.log('Resolved:', value); // 输出 'Resolved value'
});

// 下面的 resolve 调用不会生效，因为 Promise 已经被解决过一次了
setTimeout(() => {
  promise.then(value => {
    console.log('Resolved again:', value); // 会输出
  });
}, 5000);

/**你可能遇到了一个常见的 JavaScript 问题，即在异步操作中，Promise 的状态已经被解决后，即使再次调用 .then()，
 * 回调函数也会被执行。这是因为 Promise 的状态一旦改变（无论是解决还是拒绝），它的状态就会被锁定，并且不会再改变。
 * 所以当你的 Promise 在 1 秒后被解决为 'Resolved value'，它的状态就已经确定了。在 JavaScript 中，Promise 是一次性的，
 * 一旦状态被解决，它就不会再变化。所以即使你在之后的代码中再次调用then()，传递的回调函数也会立即执行，
 * 因为 Promise 已经解决了，并且会将解决的值传递给回调函数。如果你有一个已经被解决的 Promise，再次调用 .then()，
 * 传递的回调函数会立即执行，而不会等待任何异步操作。所以，当你调用 promise.then() 时，即使再次调用也会输出回调函数。
 * 这是因为 Promise 的状态已经确定了，并且回调函数会立即执行。*/