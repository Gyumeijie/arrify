import arrify from './index';

describe('arrify a string', () => {
  test('non-empty string', () => {
    expect(arrify('string')).toEqual(['s', 't', 'r', 'i', 'n', 'g']);
  });
  test('empty string', () => {
    expect(arrify('')).toEqual(['']);
  });
});

describe('arrify null or undefined', () => {
  test('null', () => {
    expect(arrify(null)).toEqual([]);
  });
  test('undefined', () => {
    expect(arrify(undefined)).toEqual([]);
  });
  test('empty', () => {
    expect(arrify()).toEqual([]);
  });
});

describe('arrify object', () => {
  test('strict array-like', () => {
    const obj = {
      0: 'zero',
      1: 'one',
      length: 2,
    };
    expect(arrify(obj)).toEqual(['zero', 'one']);
  });
  test('falsy array-like', () => {
    const obj = {
      0: 'zero',
      1: 'one',
      length: 3,
    };
    expect(arrify(obj)).toEqual([{ 0: 'zero', 1: 'one', length: 3 }]);
  });

  test('other objects', () => {
    expect(arrify({ key: 'value' })).toEqual([{ key: 'value' }]);

    let fn = () => {};
    expect(arrify(fn)).toEqual([fn]);

    let map = new Map();
    map.set('key', 'value');
    expect(arrify(map)).toEqual([map]);
  });
});

describe('arrify a array', () => {
  test('non-empty array', () => {
    expect(arrify([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(arrify([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, [4, 5]]);
  });
  test('emtpy array', () => {
    expect(arrify([])).toEqual([]);
  });
});
