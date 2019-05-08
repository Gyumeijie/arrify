# arraify [![](https://travis-ci.com/Gyumeijie/arrify.svg?branch=master)](https://travis-ci.com/Gyumeijie/arrify)

> Convert a value to an array

## Install

```
$ npm install arraify
```

## Usage

```js
const arrify = require('arraify');

const obj = {
  0: 'zero',
  1: 'one',
  length: 2,
};
arrify(obj);
// ['zero', 'one']

const obj = {
  0: 'zero',
  1: 'one',
  length: 3,
};

arrify.config.arraySimilarity = 2;
arrify(obj);
// [{ 0: 'zero', 1: 'one', length: 3 }]
arrify.config.arraySimilarity = 1;
arrify(obj);
// [{ 0: 'zero', 1: 'one', length: 3 }]

arrify.config.arraySimilarity = 0;
arrify(obj);
// ['zero', 'one', undefined]

arrify(1, 2, 3);
// [1, 2, 3]

arrify('string');
// ['s', 't', 'r', 'i', 'n', 'g']

arrify.config.splitString = false;
arrify('string');
// ['sting']

arrify([]);
// []

arrify();
// []

arrify(null);
// []

arrify(undefined);
// []
```

## Configs

```javascript
arrify.config = {
  splitString: true,
  arraySimilarity: 2,
};
```
splitString:  
>true | false, and `true` is the default

[arraySimilarity](https://github.com/Gyumeijie/isArrayLike):
> 0 | 1 | 2, and `2` is the default


## License

MIT © [Gyumeijie](https://github.com/Gyumeijie)
