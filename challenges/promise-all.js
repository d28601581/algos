/*

Write a function that works the same as Promise.all

From MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

The Promise.all() method returns a single Promise that resolves when all of the
promises passed as an iterable have resolved or when the iterable contains no
promises. It rejects with the reason of the first promise that rejects.

Hint:

use the Promise constructor. The Promise constructor takes in two arguments:
"resolve" and "reject". Calling "resolve" on a value will complete will the
value. Calling "reject" on a value will error-out with the value.

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
for info on the Promise constructor.

*/

const  promiseAll = promises => {
  return new Promise((resolve, reject) => {
    let res = [];
    let resolved = 0;
    for (let i = 0; i < promises.length; i++){
      promises[i]
      .then(
        ele => {
          res[i] = ele;
          resolved++;
          if (resolved === promises.length) {
            resolve(res);
          }
        }
      )
      .catch(error => reject(error))
    }
  });
}


module.exports = {promiseAll};

