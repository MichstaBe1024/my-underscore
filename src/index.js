const _ = require('underscore');
const { each } = require('./each')

const arr = [1, 3, 4]
const obj = { one: 1, two: 3, there: 4 }

const result = _.each(arr, (value) => {
  return value * 2
})

const result1 = each(arr, (value) => {
  console.log('myEach', value);
  return value * 2;
})
console.log('result1', result1)
console.log('result', result)
