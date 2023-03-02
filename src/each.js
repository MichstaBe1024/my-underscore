const _ = require('./underscore');

const arr = [1, 2, 3];
console.log(_.map([1, 2, 3], 1))
console.log(_.map(arr, (value) => value * 2))
console.log(_.map([{ name: 'Kevin' }, { name: 'Daisy', age: 18 }], { name: 'Daisy' }))