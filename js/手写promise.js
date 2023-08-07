class MyPromise {
  constructor(executor) {
    this._status = 'PENDING';
    this._value = undefined;
    this._callbacks = [];

    const resolve = (value) => {
      if (this._status === 'PENDING') {
        this._status = 'FULFILLED';
        this._value = value;
        this._executeCallbacks();
      }
    };

    const reject = (reason) => {
      if (this._status === 'PENDING') {
        this._status = 'REJECTED';
        this._value = reason;
        this._executeCallbacks();
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const callback = () => {
        try {
          if (this._status === 'FULFILLED') {
            const result = onFulfilled ? onFulfilled(this._value) : this._value;
            resolve(result);
          } else if (this._status === 'REJECTED') {
            const result = onRejected ? onRejected(this._value) : this._value;
            reject(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this._status === 'PENDING') {
        this._callbacks.push(callback);
      } else {
        callback();
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  _executeCallbacks() {
    this._callbacks.forEach(callback => callback());
    this._callbacks = [];
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }
}

// 测试用例1：基本功能测试
const promise1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved value');
  }, 1000);
});

promise1.then((result) => {
  console.log('Resolved:', result); // 输出: "Resolved: Resolved value"
});

// 测试用例2：链式调用测试
const promise2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved value 2');
  }, 2000);
});

promise2
  .then((result) => {
    console.log('Step 1:', result); // 输出: "Step 1: Resolved value 2"
    return 'Step 1 result';
  })
  .then((result) => {
    console.log('Step 2:', result); // 输出: "Step 2: Step 1 result"
  });

// 测试用例3：错误处理测试
const promise3 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong'));
  }, 3000);
});

promise3
  .then((result) => {
    console.log('Resolved:', result);
  })
  .catch((error) => {
    console.error('Error:', error.message); // 输出: "Error: Something went wrong"
  });
