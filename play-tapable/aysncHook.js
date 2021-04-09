const { AsyncSeriesHook } = require('tapable')

const hook = new AsyncSeriesHook(['name'])

console.time('cost')

hook.tapAsync('hello', (name, cb) => {
  setTimeout(() => {
    console.log(`hello ${name}`);
    cb()
  }, 2000);
})

hook.tapPromise('hello again', (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`hello ${name} again`);
      resolve()
    }, 1000);
  })
})

hook.callAsync('wangyong', () => {
  console.log('done');
  console.timeEnd('cost')
})