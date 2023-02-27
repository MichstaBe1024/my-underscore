const _ = require('./index');

const arr = [1, 2, 3];
_.each(arr, function (value) {
  console.log('value', value)
})