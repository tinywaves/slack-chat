// 定义Promise的状态
const PROMISE_STATUS_PADDING = 'PROMISE_STATUS_PADDING'
const PROMISE_STATUS_FULFILLED = 'PROMISE_STATUS_FULFILLED'
const PROMISE_STATUS_REJECTED = 'PROMISE_STATUS_REJECTED'

class zdhPromise {
  /**
   * 构造函数
   * @param {Function} executor Promise传入的回调函数
   */
  constructor(executor) {
    // 默认情况下Promise的状态应该为padding状态
    this.promiseStatus = PROMISE_STATUS_PADDING
    // then方法和catch方法能够获取resolve方法和reject方法接收的参数,因此需要保存这些参数,默认值为undefined
    this.value = undefined
    this.reason = undefined
    // 将then方法传入的所有onfulfilled和onrejected保存到数组中,实现then方法可以调用多次的功能
    this.onfulfilledCallbacks = []
    this.onrejectedCallbacks = []

    /**
     * resolve函数
     * @param {*} value resolve函数的参数
     */
    const resolve = value => {
      if (this.promiseStatus === PROMISE_STATUS_PADDING) {
        // 使用queueMicrotask延迟执行代码,防止onfulfilled为undefined
        queueMicrotask(() => {
          // 若当前状态不为padding则不应该执行当前微任务中的代码
          if (this.promiseStatus !== PROMISE_STATUS_PADDING) return
          // 当Promise的状态依旧为padding时才能改变状态,保证resolve和reject只能调用其一
          this.promiseStatus = PROMISE_STATUS_FULFILLED
          // 将传入的参数赋值给value
          this.value = value
          // 当执行resolve方法时同时调用then方法传入的第一个回调函数
          this.onfulfilledCallbacks.forEach(callback => {
            callback(this.value)
          })
        })
      }
    }

    /**
     * reject函数
     * @param {*} reason reject函数的参数
     */
    const reject = reason => {
      if (this.promiseStatus === PROMISE_STATUS_PADDING) {
        // 使用queueMicrotask延迟执行代码,防止onrejected为undefined
        queueMicrotask(() => {
          // 若当前状态不为padding则不应该执行当前微任务中的代码
          if (this.promiseStatus !== PROMISE_STATUS_PADDING) return
          // 当Promise的状态依旧为padding时才能改变状态,保证resolve和reject只能调用其一
          this.promiseStatus = PROMISE_STATUS_REJECTED
          // 将传入的参数赋值给reason
          this.reason = reason
          // 当执行reject方法时同时调用then方法传入的第二个回调函数
          this.onrejectedCallbacks.forEach(callback => {
            callback(this.reason)
          })
        })
      }
    }
    // 执行传入的回调函数,使用try/catch捕获在new zdhPromise中抛出的异常，此时应当直接调用reject
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  /**
   * then方法
   * @param {Function} onfulfilled 状态为fulfilled时需要执行的回调函数
   * @param {Function} onrejected 状态为rejected时需要执行的回调函数
   * @returns 返回一个新的Promise对象供链式调用
   */
  then(onfulfilled, onrejected) {
    onrejected =
      onrejected ||
      (error => {
        throw error
      })
    onfulfilled =
      onfulfilled ||
      (value => {
        return value
      })
    // 返回一个新创建的Promise对象,实现链式调用
    return new zdhPromise((resolve, reject) => {
      if (this.promiseStatus === PROMISE_STATUS_FULFILLED && onfulfilled) {
        // 若传入回调函数时Promise的状态已经是fulfilled并且onfulfilled有值,则直接执行onfulfilled,并获取返回值供链式调用的resolve方法使用;同样需要使用try/catch捕获抛出的异常
        handleException(onfulfilled, this.value, resolve, reject)
      }
      if (this.promiseStatus === PROMISE_STATUS_REJECTED && onrejected) {
        // 若传入回调函数时Promise的状态已经是rejected并且onrejected有值,则直接执行onrejected,并获取返回值供链式调用的resolve方法使用;同样需要使用try/catch捕获抛出的异常
        handleException(onrejected, this.reason, resolve, reject)
      }
      if (this.promiseStatus === PROMISE_STATUS_PADDING) {
        // 若传入回调函数时Promise的状态是padding时保存then方法传入的回调函数,并且需要进行if判断,只有传入的是非undefined才进行push
        if (onfulfilled)
          this.onfulfilledCallbacks.push(() => {
            handleException(onfulfilled, this.value, resolve, reject)
          })
        if (onrejected)
          this.onrejectedCallbacks.push(() => {
            handleException(onrejected, this.reason, resolve, reject)
          })
      }
    })
  }

  /**
   * catch方法
   * @param {Function} onrejected 状态为rejected时需要执行的回调函数
   * @returns 返回Promise对象
   */
  catch(onrejected) {
    // 调用then方法,第一个参数设置为undefined
    return this.then(undefined, onrejected)
  }

  /**
   * finally方法
   * @param {Function} onfinally 需要最终执行的回调函数
   */
  finally(onfinally) {
    this.then(
      () => {
        onfinally()
      },
      () => {
        onfinally()
      }
    )
  }

  /**
   * resolve类方法
   * @param {*} value resolve函数的参数
   * @returns 返回一个Promise对象
   */
  static resolve(value) {
    return new zdhPromise(resolve => {
      resolve(value)
    })
  }

  /**
   * reject类方法
   * @param {*} reason reject函数的参数
   * @returns 返回一个Promise对象
   */
  static reject(reason) {
    return new zdhPromise(reject => {
      reject(reason)
    })
  }

  /**
   * all类方法
   * @param {Array} promiseArray 传入的Promise数组
   * @returns 返回一个Promise对象
   */
  static all(promiseArray) {
    return new zdhPromise((resolve, reject) => {
      const valueArray = []
      promiseArray.forEach(promise => {
        promise.then(
          res => {
            valueArray.push(res)
            // 当所有传入的Promise对象的结果都为fulfilled时才执行resolve
            if (valueArray.length === promiseArray.length) {
              resolve(valueArray)
            }
          },
          error => {
            // 遇到rejected时执行reject
            reject(error)
          }
        )
      })
    })
  }

  /**
   * allSettled类方法
   * @param {Array} promiseArray 传入的Promise数组
   * @returns 返回一个Promise对象
   */
  static allSettled(promiseArray) {
    return new zdhPromise(resolve => {
      const results = []
      // allSettled方法不会调用reject,而是记录相应Promise对象的状态
      promiseArray.forEach(promise => {
        promise.then(
          res => {
            // 记录状态
            results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
            // 当每个Promise对象都执行完毕后执行resolve
            if (results.length === promiseArray.length) {
              resolve(results)
            }
          },
          error => {
            // 记录状态
            results.push({ status: PROMISE_STATUS_REJECTED, value: error })
            // 当每个Promise对象都执行完毕后执行resolve
            if (results.length === promiseArray.length) {
              resolve(results)
            }
          }
        )
      })
    })
  }

  /**
   * race方法
   * @param {Array} promiseArray 传入的Promise数组
   * @returns 返回一个Promise对象
   */
  static race(promiseArray) {
    return new zdhPromise((resolve, reject) => {
      promiseArray.forEach(promise => {
        // 有结果后马上执行resolve或者reject
        promise.then(
          res => {
            resolve(res)
          },
          error => {
            reject(error)
          }
        )
      })
    })
  }

  /**
   * any方法
   * @param {Array} promiseArray 传入的Promise数组
   * @returns 返回一个Promise对象
   */
  static any(promiseArray) {
    return new zdhPromise((resolve, reject) => {
      const reasonArray = []
      promiseArray.forEach(promise => {
        promise.then(res => {
          // 只要出现一个Promise对象的状态变为fulfilled直接执行resolve
          resolve(res)
        }, error => {
          // 收集rejected
          reasonArray.push(error)
          // 若状态为rejected的Promise对象的数量和传入的所有Promise对象的数量相同,直接抛出AggregateError异常
          if (reasonArray.length === promiseArray.length) {
            reject(new AggregateError(reasonArray))
          }
        })
      })
    })
  }
}

/**
 * 处理异常的工具函数
 * @param {Function} fn 需要执行的函数
 * @param {*} value 给fn传递的参数
 * @param {Function} resolve resolve函数
 * @param {Function} reject reject函数
 */
function handleException(fn, value, resolve, reject) {
  try {
    const result = fn(value)
    resolve(result)
  } catch (error) {
    reject(error)
  }
}
