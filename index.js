'use strict';

import isArrayLike from '@gyumeijie/is-array-like';

const isObject = (value) => {
  const type = typeof value;
  return value !== null && (type === 'object' || type === 'function');
};

const arrify = (...args) => {
  if (args.length === 1) {
    let value = args[0];

    if (value === null || value === undefined) {
      return [];
    }

    if (isObject(value) && isArrayLike(value, arrify.config.arraySimilarity)) {
      return Array.prototype.slice.call(value);
    }

    if (typeof value === 'string' && arrify.config.splitString) {
      return value.length === 0 ? [''] : value.split('');
    }

    return [value];
  }

  return args;
};

arrify.config = {
  splitString: true,
  arraySimilarity: 2,
};

export default arrify;
