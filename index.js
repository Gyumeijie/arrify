'use strict';

const isObject = (value) => {
  const type = typeof value;
  return value !== null && (type === 'object' || type === 'function');
};

const isArrayLike = (obj) => {
  if (obj.hasOwnProperty('length') && typeof obj !== 'function') {
    for (let i = 0; i < obj.length; i++) {
      if (!obj.hasOwnProperty(i)) return false;
    }
    return true;
  }

  return false;
};

const arrify = (...args) => {
  if (args.length === 1) {
    let value = args[0];

    if (value === null || value === undefined) {
      return [];
    }

    if (isObject(value) && isArrayLike(value)) {
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
};

module.exports = arrify;
