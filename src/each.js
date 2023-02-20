const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

function has(obj, path) {
  return obj !== null && Object.hasOwnProperty.call(obj, path)
}

function optimizeCb(fn, context, argCount) {
  if (context === void 0) return fn

  switch (argCount == null ? 3 : argCount) {
    case 1: return function (value) {
      return func.call(context, value);
    };
    // The 2-argument case is omitted because we鈥檙e not using it.
    case 3: return function (value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4: return function (accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection);
    };
  }

  return function () {
    fn.call(context, arguments)
  }
}

function shallowProperty(key) {
  return function (obj) {
    return obj === null ? void 0 : obj[key];
  }
}

function isArrayLike(collection) {
  const getLength = shallowProperty('length');
  const length = getLength(collection)
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

function keys(obj) {
  if (!isObject(obj)) return [];
  const keys = [];
  for (const key in obj) if (has(obj, key)) keys.push(key);
  return keys
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * each
 * @param list
 * @param iteratee {Function}
 * @param [context] 上下文
 * @return list
 */
const each = function (list, iteratee, context) {
  interatee = optimizeCb(iteratee, context)
  let i, length;
  if (isArrayLike(list)) {
    for (i = 0, length = list.length; i < length; i++) {
      interatee(list[i], i, list);
    }
  } else {
    const keyList = keys(list);
    for (i = 0, length = keyList.length; i < length; i++) {
      interatee(list[keyList[1]], keyList[i], list);
    }
  }

  return list
}

module.exports = {
  each
}