const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function my_promise(executor) {
  this.PromiseState = PENDING;
  this.PromiseResult = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];
  const _this = this;
  function resolve(value) {
    if (_this.PromiseState === PENDING) {
      _this.PromiseState = FULFILLED;
      _this.PromiseResult = value;
      _this.onFulfilledCallbacks.forEach(function (callback) {
        callback(value);
      });
    }
  }
  function reject(value) {
    if (_this.PromiseState === PENDING) {
      _this.PromiseState = REJECTED;
      _this.PromiseResult = value;
      _this.onRejectedCallbacks.forEach(function (callback) {
        callback(value);
      });
    }
  }
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
  return this;
}

my_promise.prototype.then = function (onFulfilled, onRejected) {
  const _this = this;
  let nextPromise;
  if (this.PromiseState === FULFILLED) {
    nextPromise = new my_promise((resolve, reject) => {
      setTimeout(function () {
        try {
          const returnValue = onFulfilled(_this.PromiseResult);
          resolve(returnValue);
        } catch (error) {
          reject(error);
        }
      }, 0);
    });
    return nextPromise;
  }
  if (this.PromiseState === REJECTED) {
    nextPromise = new my_promise((resolve, reject) => {
      setTimeout(function () {
        try {
          const returnValue = onRejected(_this.PromiseResult);
          reject(returnValue);
        } catch (error) {
          reject(error);
        }
      }, 0);
    });
    return nextPromise;
  }
  if (this.PromiseState === PENDING) {
    nextPromise = new my_promise((resolve, reject) => {
      _this.onFulfilledCallbacks.push(function () {
        setTimeout(function () {
          try {
            const returnValue = onFulfilled(_this.PromiseResult);
            resolve(returnValue);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
      _this.onRejectedCallbacks.push(function () {
        setTimeout(function () {
          try {
            const returnValue = onRejected(_this.PromiseResult);
            reject(returnValue);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
    });
    return nextPromise;
  }
};

new my_promise((resolve, reject) => {
  console.log('我立即执行');
  setTimeout(() => {
    resolve();
  }, 1000);
})
  .then((resolve, reject) => {
    setTimeout(() => {
        console.log('1秒后执行');
      }, 1000);
      reject();
  })
  .then(() => {
    console.log('不执行');
  });

